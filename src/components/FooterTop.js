import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ActionLink from './ActionLink';

export default class FooterTop extends React.Component {
    render() {
        console.log(this.props.pageContext.site.siteMetadata.footertop.content);
        console.log(this.props);
        return (
            <footer id="colophon" className="site-footer outer">
              <div className="inner">
                <div className="grid grid-col-3">

                  <div className="grid-item">
                    {_.get(this.props, 'pageContext.site.siteMetadata.footertop.mobile_number', null) && (
                    <span className="copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footertop.mobile_number', null))}</span>
                    )}
                    
                  </div>

                <div className="grid-item">
                    {_.get(this.props, 'pageContext.site.siteMetadata.footertop.content', null) && (
                    <span className="copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footertop.content', null))}</span>
                    )}
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                      <ActionLink key={action_idx} {...this.props} action={action} />
                    ))}
                  </div>

                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                    <div class="grid-item flx-end">
                        <div className="social-links">
                            {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => (
                            <ActionLink key={action_idx} {...this.props} action={action} />
                            ))}
                        </div>
                    </div>
                  )}
                </div>
              </div>
            </footer>
        );
    }
}
