import React from 'react';
import _ from 'lodash';

import {classNames, htmlToReact, withPrefix, Link, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class MarketsGrid extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000, 
            pauseOnHover: true, 
            slidesToShow: 4,
            arrows:true,
            slidesToScroll: 1,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 800,
                settings: {
                slidesToShow: 1,
                slidesToScroll:1
                }
            }
            ]
        };
        let section = _.get(this.props, 'section', null);
        console.log(section)
        // alert('sdfsdf')
        return (
            <section id={_.get(section, 'section_id', null)} className={classNames('block', 'block-grid', 'outer', {'has-header': _.get(section, 'title', null) || _.get(section, 'subtitle', null)})}>
                <div class="grey-sec">
                    <div className="inner">


                    <Slider {...settings}>
                    {_.map(_.get(section, 'grid_items', null), (item, item_idx) => (
                        <div key={item_idx} className="grid-item">
                        <div className="grid-item-inside">
                            {_.get(item, 'image', null) && (
                            <div className="grid-item-image">
                            <img src={withPrefix(_.get(item, 'image', null))} alt={_.get(item, 'image_alt', null)} />
                            </div>
                            )}
                          
                            {_.get(item, 'content', null) && (
                            <div className="grid-item-content">
                            {markdownify(_.get(item, 'content', null))}
                            </div>
                            )}

                              {_.get(item, 'title', null) && (
                            <h3 className="grid-item-title line-left">
                            {_.get(item, 'title_url', null) ? (
                            <Link to={withPrefix(_.get(item, 'title_url', null))}>{_.get(item, 'title', null)}</Link>
                            ) : 
                            _.get(item, 'title', null)
                            }
                            </h3>
                            )}
                            {/* {_.get(item, 'actions', null) && (
                            <div className="grid-item-buttons">
                            <CtaButtons {...this.props} actions={_.get(item, 'actions', null)} />
                            </div>
                            )} */}
                        </div>
                        </div>
                        ))}
                    </Slider>
                </div>
                </div>
            </section>
        );
    }
}
