// Core
import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// Redux actions
import {CheckerSetThingStringAction} from "../../redux/actions/check.actions";
import {MemberAlbumsGetAsyncAction} from "../CheckMember/checkMember.api";
// Styles
import '../../styles/getAlbums.style.scss';

const CheckMemberContainer = () => {

    const dispatch = useDispatch();

    const check = useSelector(state => state.checker);
    const checkMemberCounters = useSelector(state => state.check_members);

    useEffect(() => {
        // readCounters()
    }, []);

    // Проверить на закрытие альбомов
    const checkAccessToAlbums = async () => {
        dispatch(CheckerSetThingStringAction('Albums'));
        dispatch(MemberAlbumsGetAsyncAction())
    };

    const handleChangeCheckSettings = () => {

    };

    return (
        <Fragment>
            <button className='album-loader__btn-load'
                    onClick={checkAccessToAlbums}
            >
                Загрузить альбомы
            </button>
        </Fragment>
    )
};

export {
    CheckMemberContainer
};
