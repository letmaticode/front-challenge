import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import { FriendshipService } from 'services/FriendshipService';
import useRequest from 'hooks/useRequest';

import List from 'components/templates/List';
import Friendship from "models/Friendship";

import './styles.scss';

const FriendshipListView = (props) => {
    const {
        beforeSubmit, afterSubmit,
        dealWithError
    } = useRequest();
    
    const [friendships, setFriendships] = useState();
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        beforeSubmit();
        FriendshipService.friendships(currentPage).then(data => {
            console.log(data.data);
            setCurrentPage(data.current_page);
            setLastPage(data.last_page);
            setCurrentPage(currentPage + 1);
            console.log(data.data.map(i => new Friendship(i)));
            setFriendships(data.data.map(i => new Friendship(i)));
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
            FriendshipService.friendships(currentPage, 5).then(data => {
                console.log(data.data);

                setFriendships(friendships.concat(data.data.map(i => new Friendship(i))));
                afterSubmit();
            }).catch((error) => {
                afterSubmit();
                dealWithError(error, '');
            });
        }, 1500);
    };

    return <List title={"Friendships"} elements={friendships} hasMore={hasMore} fetchMoreData={fetchMoreData}></List>
}

export default withTranslation()(FriendshipListView);