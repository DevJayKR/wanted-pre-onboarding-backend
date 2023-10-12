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
                    <a href="index.html" data-type="index-link">wanted-pre-onboarding-backend-dev-jay-kr documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-7abe0497242a4a201410337cfddbd76cbee10f3d9132989e42219ed352f9d672dde749a13fcb12533940592da05c021d674ccfe71b45d8dac0c58f59f30bd4af"' : 'data-bs-target="#xs-injectables-links-module-AppModule-7abe0497242a4a201410337cfddbd76cbee10f3d9132989e42219ed352f9d672dde749a13fcb12533940592da05c021d674ccfe71b45d8dac0c58f59f30bd4af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7abe0497242a4a201410337cfddbd76cbee10f3d9132989e42219ed352f9d672dde749a13fcb12533940592da05c021d674ccfe71b45d8dac0c58f59f30bd4af"' :
                                        'id="xs-injectables-links-module-AppModule-7abe0497242a4a201410337cfddbd76cbee10f3d9132989e42219ed352f9d672dde749a13fcb12533940592da05c021d674ccfe71b45d8dac0c58f59f30bd4af"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompanyModule.html" data-type="entity-link" >CompanyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompanyModule-f3c80dd22032f2040c6a7bb9b7e2a4e824fe655618c305e708590ec9f7120f044fee028650bfe17784b89365462c4fc8e30b38f057c3d235e1a8f22df5b44595"' : 'data-bs-target="#xs-controllers-links-module-CompanyModule-f3c80dd22032f2040c6a7bb9b7e2a4e824fe655618c305e708590ec9f7120f044fee028650bfe17784b89365462c4fc8e30b38f057c3d235e1a8f22df5b44595"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompanyModule-f3c80dd22032f2040c6a7bb9b7e2a4e824fe655618c305e708590ec9f7120f044fee028650bfe17784b89365462c4fc8e30b38f057c3d235e1a8f22df5b44595"' :
                                            'id="xs-controllers-links-module-CompanyModule-f3c80dd22032f2040c6a7bb9b7e2a4e824fe655618c305e708590ec9f7120f044fee028650bfe17784b89365462c4fc8e30b38f057c3d235e1a8f22df5b44595"' }>
                                            <li class="link">
                                                <a href="controllers/CompanyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompanyModule-f3c80dd22032f2040c6a7bb9b7e2a4e824fe655618c305e708590ec9f7120f044fee028650bfe17784b89365462c4fc8e30b38f057c3d235e1a8f22df5b44595"' : 'data-bs-target="#xs-injectables-links-module-CompanyModule-f3c80dd22032f2040c6a7bb9b7e2a4e824fe655618c305e708590ec9f7120f044fee028650bfe17784b89365462c4fc8e30b38f057c3d235e1a8f22df5b44595"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompanyModule-f3c80dd22032f2040c6a7bb9b7e2a4e824fe655618c305e708590ec9f7120f044fee028650bfe17784b89365462c4fc8e30b38f057c3d235e1a8f22df5b44595"' :
                                        'id="xs-injectables-links-module-CompanyModule-f3c80dd22032f2040c6a7bb9b7e2a4e824fe655618c305e708590ec9f7120f044fee028650bfe17784b89365462c4fc8e30b38f057c3d235e1a8f22df5b44595"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmploymentModule.html" data-type="entity-link" >EmploymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EmploymentModule-60ca86a00a3d92c28b4ba559b19cc1928b142fd774ff947efbebd12017f4066e23adf23c49d5a57ecd9a0cf7aaab8d3ad7ca791e97380a356b82d1da9acb4bae"' : 'data-bs-target="#xs-controllers-links-module-EmploymentModule-60ca86a00a3d92c28b4ba559b19cc1928b142fd774ff947efbebd12017f4066e23adf23c49d5a57ecd9a0cf7aaab8d3ad7ca791e97380a356b82d1da9acb4bae"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmploymentModule-60ca86a00a3d92c28b4ba559b19cc1928b142fd774ff947efbebd12017f4066e23adf23c49d5a57ecd9a0cf7aaab8d3ad7ca791e97380a356b82d1da9acb4bae"' :
                                            'id="xs-controllers-links-module-EmploymentModule-60ca86a00a3d92c28b4ba559b19cc1928b142fd774ff947efbebd12017f4066e23adf23c49d5a57ecd9a0cf7aaab8d3ad7ca791e97380a356b82d1da9acb4bae"' }>
                                            <li class="link">
                                                <a href="controllers/EmploymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmploymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EmploymentModule-60ca86a00a3d92c28b4ba559b19cc1928b142fd774ff947efbebd12017f4066e23adf23c49d5a57ecd9a0cf7aaab8d3ad7ca791e97380a356b82d1da9acb4bae"' : 'data-bs-target="#xs-injectables-links-module-EmploymentModule-60ca86a00a3d92c28b4ba559b19cc1928b142fd774ff947efbebd12017f4066e23adf23c49d5a57ecd9a0cf7aaab8d3ad7ca791e97380a356b82d1da9acb4bae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmploymentModule-60ca86a00a3d92c28b4ba559b19cc1928b142fd774ff947efbebd12017f4066e23adf23c49d5a57ecd9a0cf7aaab8d3ad7ca791e97380a356b82d1da9acb4bae"' :
                                        'id="xs-injectables-links-module-EmploymentModule-60ca86a00a3d92c28b4ba559b19cc1928b142fd774ff947efbebd12017f4066e23adf23c49d5a57ecd9a0cf7aaab8d3ad7ca791e97380a356b82d1da9acb4bae"' }>
                                        <li class="link">
                                            <a href="injectables/EmploymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmploymentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-0c1e13124bf9f93f830de3fd88675d10f2618729cdff1b344128f5ba6b3802d92b033f0744520988276c2a997f55978de5434a5f8aa8afed9151ab2d29552fa3"' : 'data-bs-target="#xs-controllers-links-module-UserModule-0c1e13124bf9f93f830de3fd88675d10f2618729cdff1b344128f5ba6b3802d92b033f0744520988276c2a997f55978de5434a5f8aa8afed9151ab2d29552fa3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-0c1e13124bf9f93f830de3fd88675d10f2618729cdff1b344128f5ba6b3802d92b033f0744520988276c2a997f55978de5434a5f8aa8afed9151ab2d29552fa3"' :
                                            'id="xs-controllers-links-module-UserModule-0c1e13124bf9f93f830de3fd88675d10f2618729cdff1b344128f5ba6b3802d92b033f0744520988276c2a997f55978de5434a5f8aa8afed9151ab2d29552fa3"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-0c1e13124bf9f93f830de3fd88675d10f2618729cdff1b344128f5ba6b3802d92b033f0744520988276c2a997f55978de5434a5f8aa8afed9151ab2d29552fa3"' : 'data-bs-target="#xs-injectables-links-module-UserModule-0c1e13124bf9f93f830de3fd88675d10f2618729cdff1b344128f5ba6b3802d92b033f0744520988276c2a997f55978de5434a5f8aa8afed9151ab2d29552fa3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-0c1e13124bf9f93f830de3fd88675d10f2618729cdff1b344128f5ba6b3802d92b033f0744520988276c2a997f55978de5434a5f8aa8afed9151ab2d29552fa3"' :
                                        'id="xs-injectables-links-module-UserModule-0c1e13124bf9f93f830de3fd88675d10f2618729cdff1b344128f5ba6b3802d92b033f0744520988276c2a997f55978de5434a5f8aa8afed9151ab2d29552fa3"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Company.html" data-type="entity-link" >Company</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Employment.html" data-type="entity-link" >Employment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ApplicationEmploymentDto.html" data-type="entity-link" >ApplicationEmploymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseEntity.html" data-type="entity-link" >BaseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEmploymentDto.html" data-type="entity-link" >CreateEmploymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchEmploymentDto.html" data-type="entity-link" >SearchEmploymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEmploymentDto.html" data-type="entity-link" >UpdateEmploymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});