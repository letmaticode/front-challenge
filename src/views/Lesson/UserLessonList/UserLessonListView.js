import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import { UserService } from 'services/UserService';
import useRequest from 'hooks/useRequest';

import List from 'components/templates/List';
import Lesson from "models/Lesson";

import './styles.scss';

const UserLessonListView = (props) => {
    const {
        beforeSubmit, afterSubmit,
        dealWithError
    } = useRequest();
    
    const userId = props?.match?.params?.user;
    
    const [lessons, setLessons] = useState();
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        beforeSubmit();
        UserService.userLessons(userId, currentPage).then(data => {
            setCurrentPage(data.current_page);
            setLastPage(data.last_page);
            setCurrentPage(currentPage + 1);

            setLessons(data.data.map(i => new Lesson(i)));
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
            UserService.userLessons(userId, currentPage, 5).then(data => {
                setLessons(lessons.concat(data.data.map(i => new Lesson(i))));
                afterSubmit();
            }).catch((error) => {
                afterSubmit();
                dealWithError(error, '');
            });
        }, 1500);
    };

    return <List title={"User Lessons"} elements={lessons} hasMore={hasMore} fetchMoreData={fetchMoreData}></List>
}

export default withTranslation()(UserLessonListView);