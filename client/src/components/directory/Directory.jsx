import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { listMenuDirectory } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/MenuItem'
import './directory.scss'

const Directory = ({listMenuDirectory}) => {

    return (
        <div className="directory-menu">
            {listMenuDirectory.map(({imageURL, title, id, size, linkUrl}) => (
            <MenuItem key={id} title={title} size={size} imageURL={imageURL} linkUrl={linkUrl} />
            ) )}
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
  listMenuDirectory: listMenuDirectory
});

export default connect(mapStateToProps)(Directory);