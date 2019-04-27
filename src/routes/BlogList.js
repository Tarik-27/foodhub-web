import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../views/BlogList.module.css';

class BlogList extends Component {
    render() {
        return (
            <div className={styles.all}>

                <div className={styles.Cover}>
                    <div className={styles.frontText}>

                        <div className={styles.Extralarge}>
                            <br/>The blog
                        </div>
                        <div className={styles.Medium}>
                            Know Food |  Write Food  |  Read Food
                        </div>
                    </div>
                    <div className={styles.add}>
                        <Link to='/'> 
                            <i className='fa fa-pencil fa-lg' />
                        </Link> 
                   
                    </div>
                    
                </div>

                <div id='main' style={inStyle.container}>
                    <div className={styles.Middle}>
                        <div className={styles.middleLeft}>
                            <div className={`${styles.orange} ${styles.Large}`}>
                                Today's Blog<br/><br/>
                            </div>
                            <div className={styles.blog}>
                                <img className={styles.blogImg} src='/images/css/Blog-1.jpeg' />
                                <br/>

                                <div className={`${styles.orange} ${styles.Large }`}>
                                    Craving for Haleem this Ramadan?
                                </div>
                                <div className={styles.Author}>
                                    <img className={styles.authorImg} src='/images/css/Tarik.jpg' />
                                    <div className={`${styles.ash} ${styles.small } ${styles.authorInfo}`}>
                                        Tanveer Kabir<br/>
                                        May 19, 2018<br/>
                                    </div>  
                                    <div className={`${styles.icon} ${styles.orange}`}>
                                        follow
                                    </div> 
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.middleRight}>
                            <div className={`${styles.orange} ${styles.Medium}`}>
                                Most viewed blogs<br/><br/>
                            </div>
                        </div>
                    </div>
                    
		        </div>

            </div>
        )
    }
}

const inStyle = {
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 1140,
        paddingTop: 30,
        paddingBottom: 30
    }
};

export default BlogList;
