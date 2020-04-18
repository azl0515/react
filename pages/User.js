import React,{Component} from 'react';
import styles from  '../assets/css/user.module.css'
import store from "../plugins/redux";
import {clear} from "../store/actionCreators";

export default class User extends Component{
    logout=()=>{
        window.localStorage.removeItem('user');
        store.dispatch(clear('CLEAR_USER'));
    };

    render(){
        let {data:{nikename,fans,follow,icon}}=store.getState().user
        return (
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2><img src={this.baseUrl2+icon} alt=""/></h2>
                    <div className={styles["user-box"]}>
                        <a>{nikename}</a>
                        <a onClick={this.logout}>注销</a>
                    </div>
                    <ul className={styles.clear}>
                        <li>
                            <span>{follow}</span>
                            <p>关注</p>
                        </li>
                        <li>
                            <span>{fans}</span>
                            <p className={styles.end}>粉丝</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.docList}>
                    <ul>
                        <li className={styles["gk-text"]}>
                            <i></i>
                            <p>公开博文</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles["mm-text"]}>
                            <i></i>
                            <p>秘密博文</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles["cg-text"]}>
                            <i></i>
                            <p>草稿箱</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles["sc-text"]}>
                            <i></i>
                            <p>收藏夹</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles.my_cz}>
                            <i></i>
                            <p>收藏夹</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}