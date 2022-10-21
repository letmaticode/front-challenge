import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import { UserService } from 'services/UserService';
import useRequest from 'hooks/useRequest';

import List from 'components/templates/List';
import UserFriendship from "models/UserFriendship";

import './styles.scss';

const UserFriendshipListView = (props) => {
    const {
        beforeSubmit, afterSubmit,
        dealWithError
    } = useRequest();

    const userId = props?.match?.params?.user;
    
    const [friendships, setFriendships] = useState();
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => { 
        beforeSubmit();
        UserService.userFriendships(userId, currentPage).then(data => {
            setCurrentPage(data.current_page);
            setLastPage(data.last_page);
            setCurrentPage(currentPage + 1);

            setFriendships(data.data.map(i => new UserFriendship(i)));
            afterSubmit();
        }).catch((error) => {
            afterSubmit();
            dealWithError(error, '');
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchMoreData = () => {
        setTimeout(() => {
            if (currentPage > lastPage) {
                setHasMore(false);
                return;
            }
        }, 1500);

        setCurrentPage(currentPage + 1);

        setTimeout(() => {
            beforeSubmit();
            UserService.userFriendships(userId, currentPage, 5).then(data => {
                setFriendships(friendships.concat(data.data.map(i => new UserFriendship(i))));
                afterSubmit();
            }).catch((error) => {
                afterSubmit();
                dealWithError(error, '');
            });
        }, 1500);
    };

    return <List title={"User Friendships"} elements={friendships} hasMore={hasMore} fetchMoreData={fetchMoreData}></List>
}

export default withTranslation()(UserFriendshipListView);