'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">portfolio documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-97a1e79eda5bc0ee86f7e92f6f3aae36ac3398d17558d939a6b2fd99c78efe2052227df97f967c9a3f9b39c212b4daeff26f6573a9f3ad6f47eb3c555326ff5c"' : 'data-target="#xs-components-links-module-AppModule-97a1e79eda5bc0ee86f7e92f6f3aae36ac3398d17558d939a6b2fd99c78efe2052227df97f967c9a3f9b39c212b4daeff26f6573a9f3ad6f47eb3c555326ff5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-97a1e79eda5bc0ee86f7e92f6f3aae36ac3398d17558d939a6b2fd99c78efe2052227df97f967c9a3f9b39c212b4daeff26f6573a9f3ad6f47eb3c555326ff5c"' :
                                            'id="xs-components-links-module-AppModule-97a1e79eda5bc0ee86f7e92f6f3aae36ac3398d17558d939a6b2fd99c78efe2052227df97f967c9a3f9b39c212b4daeff26f6573a9f3ad6f47eb3c555326ff5c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookshelfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookshelfComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HobbiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HobbiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PortfolioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortfolioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SitemapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SitemapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WritingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WritingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-97a1e79eda5bc0ee86f7e92f6f3aae36ac3398d17558d939a6b2fd99c78efe2052227df97f967c9a3f9b39c212b4daeff26f6573a9f3ad6f47eb3c555326ff5c"' : 'data-target="#xs-directives-links-module-AppModule-97a1e79eda5bc0ee86f7e92f6f3aae36ac3398d17558d939a6b2fd99c78efe2052227df97f967c9a3f9b39c212b4daeff26f6573a9f3ad6f47eb3c555326ff5c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-97a1e79eda5bc0ee86f7e92f6f3aae36ac3398d17558d939a6b2fd99c78efe2052227df97f967c9a3f9b39c212b4daeff26f6573a9f3ad6f47eb3c555326ff5c"' :
                                        'id="xs-directives-links-module-AppModule-97a1e79eda5bc0ee86f7e92f6f3aae36ac3398d17558d939a6b2fd99c78efe2052227df97f967c9a3f9b39c212b4daeff26f6573a9f3ad6f47eb3c555326ff5c"' }>
                                        <li class="link">
                                            <a href="directives/LazyImageDirectiveDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LazyImageDirectiveDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="unit-test.html"><span class="icon ion-ios-podium"></span>Unit test coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});