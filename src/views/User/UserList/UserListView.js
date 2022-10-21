import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import { UserService } from 'services/UserService';
import useRequest from 'hooks/useRequest';

import List from 'components/templates/List';
import User from "models/User";

import './styles.scss';

const UserListView = (props) => {
    const {
        beforeSubmit, afterSubmit,
        dealWithError
    } = useRequest();
    
    const [users, setUsers] = useState();
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        beforeSubmit();
        UserService.users(currentPage).then(data => {
            console.log(data.data);
            setCurrentPage(data.current_page);
            setLastPage(data.last_page);
            setCurrentPage(currentPage + 1);

            setUsers(data.data.map(i => new User(i)));
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
            UserService.users(currentPage, 5).then(data => {
                console.log(data.data);

                setUsers(users.concat(data.data.map(i => new User(i))));
                afterSubmit();
            }).catch((error) => {
                afterSubmit();
                dealWithError(error, '');
            });
        }, 1500);
    };

    return <List title={"Configuración"} elements={users} hasMore={hasMore} fetchMoreData={fetchMoreData} showLinks={true}></List>
}

export default withTranslation()(UserListView);