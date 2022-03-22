import React from 'react';
import PropTypes from 'prop-types';
import {useRecoilState} from 'recoil' ;
import {DataState} from './Data'

ListPage.propTypes = {
    
};

function ListPage(props) {

    const [dataState, setDataState] = useRecoilState(DataState);

    const showLists = dataState.map((member,index) => {
        return     <ul key = {index}>
                        <h1>Khánh hàng {index + 1}</h1>
                        <li>{member.phone}</li>
                        <li>{member.firstName}</li>
                        <li>{member.lastName}</li>
                        <li>{member.email}</li>
                    </ul>
    })

    return (
        <div>
            {showLists}
        </div>
    );
}

export default ListPage;