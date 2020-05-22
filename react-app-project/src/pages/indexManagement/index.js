import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.scss";
import icon01 from "@/assets/images/icon01.png";
import icon02 from "@/assets/images/icon02.png";
import icon03 from "@/assets/images/icon03.png";
import icon04 from "@/assets/images/icon04.png";
import app01 from "@/assets/images/app01.jpg";
import app02 from "@/assets/images/app02.jpg";
import app03 from "@/assets/images/app03.jpg";
import app04 from "@/assets/images/app04.jpg";
import app05 from "@/assets/images/app05.png";
import app06 from "@/assets/images/app06.jpg";
import { Divider, Button } from "antd";

import store from "@/store";
import reducer from "./reducer.js";
import { injectAsyncReducer } from "@/utils/dynamicLoadReducers.js";

injectAsyncReducer(store, "indexReducer", reducer);

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="index-page">
        <div className="page-left">
          {/* 企业尚未认证 */}
          {/* <div className="company">
            <img className="company-icon" src={icon02} alt="pic" />
            <div className="company-right">
              <div className="company-name">企业尚未认证</div>
              <Button type="primary" size="middle" ghost>
                立即认证
              </Button>
            </div>
          </div> */}

          {/* 认证中 */}
          {/* <div className="company">
            <img className="company-icon" src={icon03} alt="pic" />
            <div className="company-right">
              <div className="company-name">企业尚未认证</div>
              <span className="color-fd9242">认证中，请耐心等待</span>
            </div>
          </div> */}

          {/* 认证失败 */}
          {/* <div className="company">
            <img className="company-icon" src={icon04} alt="pic" />
            <div className="company-right">
              <div className="company-name">企业尚未认证</div>
              <Button type="primary" size="middle" ghost>
                立即认证
              </Button>
            </div>
          </div> */}

          {/* 认证通过 */}
          <div className="company">
            <img className="company-icon" src={icon01} alt="pic" />
            <div className="company-right">
              <div className="company-name">企业企业企业企业企业企业企业</div>
            </div>
          </div>
          <Divider />

          {/* 认证通过 */}
          {/* <div>
            <div className="left-item">
              <div className="item-label">员工数量</div>
              <div className="item-content">
                <span>40人/</span>
                <span className="redcolor">12人未激活</span>
              </div>
            </div>
            <div className="left-item">
              <div className="item-label">昨天使用人数</div>
              <div className="item-content">14人</div>
            </div>
            <div className="left-button">
              <Button type="link">邀请员工 ></Button>
            </div>
            <Divider />
            <div className="left-item">
              <div className="item-label">企业账户</div>
              <div className="item-content">188元</div>
            </div>
            <div className="left-item">
              <div className="item-label">蜂豆账户</div>
              <div className="item-content">14蜂豆</div>
            </div>
            <div className="left-item">
              <div className="item-label">收益账户</div>
              <div className="item-content">188元</div>
            </div>
            <div className="left-item">
              <div className="item-label">保证金账户</div>
              <div className="item-content">188元</div>
            </div>
            <div className="left-item">
              <div className="item-label">帐户管理员</div>
              <div className="item-content">李某某</div>
            </div>
            <div className="left-button">
              <Button type="link">资金账户 ></Button>
            </div>
          </div> */}

          {/* 未认证 */}
          <div>
            <div className="app-item-title">认证通过后，可以享受以下功能</div>
            <div className="app-item">
              <div className="app-icon">
                <img src={icon02} alt="pic" />
              </div>
              <div className="app-txt">
                <div>企业通讯录</div>
                <span>
                  免费企业通讯录，号码再也不牛逼了免费企业通讯录，号码再也不牛逼了免费企业通讯录，号码再也不牛逼了
                </span>
              </div>
            </div>
            <div className="app-item">
              <div className="app-icon">
                <img src={icon02} alt="pic" />
              </div>
              <div className="app-txt">
                <div>企业通讯录</div>
                <span>免费企业通讯录，号码再也不牛逼了</span>
              </div>
            </div>
          </div>
        </div>

        <div className="page-right">
          <div className="ad-img">
            <img src="" alt="pic" />
          </div>
          {/* <div className="block-item">
            <div className="right-title">
              <div className="right-title-label">消息中心</div>
              <div className="right-title-content">
                <Button type="link">查看更多 ></Button>
              </div>
            </div>
            <ul className="msg-list">
              <li>
                <span>【财务消息】提现到账提醒</span>
                <span className="fr"> 2019-08-09-12 15:14:05</span>
              </li>
              <li>
                <span>【财务消息】提现到账提醒</span>
                <span className="fr"> 2019-08-09-12 15:14:05</span>
              </li>
              <li>
                <span>【财务消息】提现到账提醒</span>
                <span className="fr"> 2019-08-09-12 15:14:05</span>
              </li>
            </ul>
          </div>
          <div className="block-item">
            <div className="right-title">
              <div className="right-title-label">快捷入口</div>
            </div>
            <ul className="app-list">
              <li>
                <img className="app-icon" src={app01} alt="pic" />
                <span className="app-txt">待续费（3）</span>
              </li>
              <li>
                <img className="app-icon" src={app02} alt="pic" />
                <span className="app-txt">合同确认（2）</span>
              </li>
              <li>
                <img className="app-icon" src={app03} alt="pic" />
                <span className="app-txt">订单待支付（2）</span>
              </li>
              <li>
                <img className="app-icon" src={app04} alt="pic" />
                <span className="app-txt">智能人事</span>
              </li>
              <li>
                <img className="app-icon" src={app05} alt="pic" />
                <span className="app-txt">虚拟号码管家 </span>
              </li>
              <li>
                <img className="app-icon" src={app06} alt="pic" />
                <span className="app-txt">慧云名片</span>
              </li>
              <li className="opacity"></li>
              <li className="opacity"></li>
              <li className="opacity"></li>
              <li className="opacity"></li>
              <li className="opacity"></li>
            </ul>
          </div>
 */}
          <div className="block-item">
            <div className="right-title">
              <div className="right-title-label">全部应用</div>
            </div>
            <ul className="apps-apply">
              <li>
                <img className="apps-apply-icon" src={app01} alt="pic" />
                <div className="apps-apply-txt">
                  <div className="apps-apply-name">应用名称</div>
                  <span>
                    应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述
                  </span>
                </div>
              </li>
              <li>
                <img className="apps-apply-icon" src={app01} alt="pic" />
                <div className="apps-apply-txt">
                  <div className="apps-apply-name">应用名称</div>
                  <span>
                    应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述
                  </span>
                </div>
              </li>
              <li>
                <img className="apps-apply-icon" src={app01} alt="pic" />
                <div className="apps-apply-txt">
                  <div className="apps-apply-name">应用名称</div>
                  <span>
                    应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述应用描述
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Index);
