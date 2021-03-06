import React from 'react';
import { Card } from './common/Card';

export const RestaurantCard = props => {
    return (
        <Card style={{ marginBottom: 15, cursor: 'pointer' }}>
            <div style={styles.mainContainer} onClick={props.onClick}>
                <img
                    src={props.banner_image}
                    alt=''
                    style={{ width: 110, height: 100 }}
                />
                <div style={{...styles.basicInfo, textTransform: 'capitalize'}}>
                    <span style={{ fontSize: '140%' }}>{props.name}</span>
                    <span style={{ fontSize: '80%' }}>
                        {props.address}
                    </span>
                    <div style={styles.meta}>
                        <span style={{ fontSize: '90%' }}>Fast Food</span>
                        <span style={{ fontSize: '90%', color: 'orange' }}>
                            Open Now
                        </span>
                    </div>
                </div>
                <div style={styles.ratingSection}>
                    <span style={styles.rating}>{props.rating.toFixed(1)}</span>
                    <span
                        style={{
                            fontSize: '70%',
                            display: 'block',
                            marginTop: 5,
                            textAlign: 'right'
                        }}
                    >
                        {`${props.count} Reviews`}
                    </span>
                </div>
                <div style={styles.icons}>
                    <i className='fa fa-phone' style={styles.icon} />
                    <i className='fa fa-envelope' style={styles.icon} />
                    <i className='fa fa-search' style={styles.icon} />
                </div>
            </div>
        </Card>
    );
};

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
    },
    basicInfo: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1.5,
        marginLeft: 15
    },
    meta: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column'
    },
    rating: {
        display: 'block',
        backgroundColor: '#ED7D31',
        padding: '6px 8px',
        alignSelf: 'flex-end',
        color: '#fff',
        fontSize: '120%',
        textAlign: 'center'
    },
    ratingSection: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        marginLeft: 40
    },
    icons: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        color: 'orange',
        fontSize: 18,
        padding: '0 3px'
    }
};
