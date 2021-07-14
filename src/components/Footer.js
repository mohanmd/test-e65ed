import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ActionLink from './ActionLink';

export default class Footer extends React.Component {
     
    render() {
        console.log(this.props)
        return (
           
            <footer id="colophon" className="site-footer outer">
              <div className="inner">
                <div className="site-footer-inside">
                  <p className="site-info">
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <span className="copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}</span>
                    )}
                  </p>
                   {_.get(this.props, 'pageContext.site.siteMetadata.footertop.has_develop_info', null) && (
                    <div className="social-links">
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footertop.social_links', null), (action, action_idx) => (
                        <ActionLink key={action_idx} {...this.props} action={action} />
                        ))}
                    </div>
                    )}
                 <p className="develop-info">
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.develop-info', null) && (
                    <span className="copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.develop-info', null))}</span>
                    )}
                  </p>
                </div>
              </div>
            </footer>
        );
    }
}
