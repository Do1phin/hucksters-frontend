// Core
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckerSetThingStringAction } from '../../redux/actions/check.actions';
import { CheckMemberContainer } from '../CheckMember/CheckMemberContainer';
import { APIGetInfoFromVkMembers } from '../CheckMember/checkMember.api';

const CheckerContainer = () => {

	const dispatch = useDispatch();

	const check = useSelector(state => state.checker);
	const checkMemberCounters = useSelector(state => state.check_members);

	useEffect(() => {
		// readCounters()
	}, []);

	const handleGetVkMembersInfo = async () => {
		dispatch(CheckerSetThingStringAction('Members'));
		await APIGetInfoFromVkMembers()
	};

	const handleChangeCheckSettings = () => {

	};

	return (
		<Fragment>

			<div className='checker'>
				<div className='checker__counters'>
					<ul className='checker__counters-info'>
						<li>Всего пользователей - {checkMemberCounters.all_members}</li>
						<li>Есть информация - {checkMemberCounters.with_info}</li>
						<li>Продавцы - {checkMemberCounters.seller}</li>
						<li>Скрытые - {checkMemberCounters.closed}</li>
						<li>Забаненные - {checkMemberCounters.banned}</li>
						<li>Удалённые - {checkMemberCounters.deleted}</li>

						<p>Проверяем {check.step} из {
							checkMemberCounters.all_members -
							checkMemberCounters.seller -
							checkMemberCounters.banned -
							checkMemberCounters.deleted -
							checkMemberCounters.closed
						}
						</p>
						<span>Статус: {check.status}</span>
					</ul>

					<button className='info-loader__btn-load'
							onClick={handleGetVkMembersInfo}
					>
						Загрузить информацию
					</button>

				</div>
				<div className="checker__settings">
					<label>
						<input type="checkbox"
							   id={'seller'}
							   defaultChecked={false}
							   onChange={handleChangeCheckSettings}
						/>
						Продавцы
					</label>
					<label>
						<input type="checkbox"
							   id={'closed'}
							   defaultChecked={false}
							   onChange={handleChangeCheckSettings}
						/>
						Скрытые
					</label>
					<label>
						<input type="checkbox"
							   id={'banned'}
							   defaultChecked={false}
							   onChange={handleChangeCheckSettings}
						/>
						Забаненные
					</label>
					<label>
						<input type="checkbox"
							   id={'deleted'}
							   defaultChecked={false}
							   onChange={handleChangeCheckSettings}
						/>
						Удалённые
					</label>
					<label>
						<input
							id={'others'}
							type="checkbox"
							defaultChecked={false}
							onChange={handleChangeCheckSettings}
						/>
						Остальные
					</label>
				</div>
				<div className="checker">
					<CheckMemberContainer/>
				</div>

			</div>
		</Fragment>
	)
};

export {
	CheckerContainer
}
