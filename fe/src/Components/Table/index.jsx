import React , {useState} from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';

export function Base(props) {     
    return (<div>
              <ReactDataGrid 
                  columns={props.item}
                  rowGetter={i => props.users[i]}
                  rowsCount={4}
                  minHeight={250}
              />
          </div>);
  }
  const mapStateToProps = state =>({
    item: state.appReducer.columns,
    users: state.appReducer.users
  })
  
  export default connect(mapStateToProps)(Base);