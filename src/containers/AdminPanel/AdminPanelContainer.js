// Core
import React, {Fragment} from 'react';
// React components
import {CheckGroup} from '../../components/group/CheckGroup';
import {GetComments} from '../../components/admin/GetComments';
import {GetPhotos} from '../../components/admin/GetPhotos';
import {Counters} from '../../components/Counters/Counters';
import {GroupsContainer} from '../Groups/GroupsContainer';
import {CheckerContainer} from '../Checker/CheckerContainer';

const AdminPanelContainer = () => {

    return (
        <Fragment>
            <GroupsContainer/>

            <Counters/>
            <CheckGroup/>
            <CheckerContainer/>

        </Fragment>
    );
};

export {
    AdminPanelContainer
};
