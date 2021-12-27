/*
 *  Copyright 2015-2022 Felix Garcia Carballeira, Alejandro Calderon Mateos, Javier Prieto Cepeda, Saul Alonso Monsalve
 *
 *  This file is part of WepSIM.
 *
 *  WepSIM is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  WepSIM is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with WepSIM.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


        /*
         *  Navbar: navtab circuits as graph/table
         */

        /* jshint esversion: 6 */
        class ws_cpucu_got extends ws_uielto
        {
	      constructor ()
	      {
		    // parent
		    super();
	      }

	      render ( )
	      {
		    // html holder
		    var o1 = '' ;

                    // row with quick config:
                    o1 +=    "<div class='container text-right col-12 px-3 pt-1'>" +
                             "<label class='my-0' for='popover-rfcfg' style='min-width:95%'>" +
                             "<span data-langkey='quick config'>quick config</span>: " +
                             "<a id='popover-cpuview' tabindex='0' " +
                             "   class='show multi-collapse-3 btn my-1 col-auto' " +
                             "   data-toggle='popover-cpuview'>" +
                             "<strong><strong class='fas fa-wrench text-secondary'></strong></strong></a>" +
                             "</label>" +
                             "</div>" ;

                    // row with pill-buttons:
                    o1 +=    '<div class="row d-none">' +
                             '  <div class="col">' +
                             '    <div class="nav nav-pills nav-fill" ' +
                             '         id="nav-tab1" role="tablist" aria-orientation="horizontal">' +
                             '      <a class="nav-link m-2 bg-light text-primary active" ' +
                             '         data-toggle="pill" role="tab" ' +
                             '         id="cpu_view_graph1" href="#cpu_graph1" ' +
                             '         aria-controls="cpu_graph1" aria-selected="true">' + 
                             '<span data-langkey="Graph">Graph</span></a>' +
                             '      <a class="nav-link m-2 bg-light text-primary" ' +
                             '         data-toggle="pill" role="tab" ' +
                             '         id="cpu_view_table1" href="#cpu_table1" ' +
                             '         aria-controls="cpu_table1" aria-selected="false">' + 
                             '<span data-langkey="Text">Text</span></a>' +
                             '    </div>' +
                             '  </div>' +
                             '</div>' ;

                    // row with panels:
                    o1 +=    '<div class="row">' +
                             '  <div class="col">' +
                             '    <div class="tab-content" id="nav-tab1-content">' +
                             '      <div role="tabpanel" class="tab-pane " ' +
                             '           id="cpu_table1" aria-labelledby="cpu_view_table1">' +
                             '      <ws-hw id="infohw1" components="elements"></ws-hw>' +
                             '      </div>' +
                             '      <div role="tabpanel" class="tab-pane show active" ' +
                             '           id="cpu_graph1" aria-labelledby="cpu_view_graph1">' +
                             '	    <ws-cpusvg></ws-cpusvg>' +
                             '      </div>' +
                             '    </div>' +
                             '  </div>' +
                             '</div>' ;

		    this.innerHTML = o1 ;

                    // initialize loaded components
		    wepsim_init_quickcfg("[data-toggle=popover-cpuview]",
			                 "click",
			                 quick_config_cpuview,
					 function(shownEvent) {
				             $("#slider4b").val(get_cfg('CPUCU_size')) ;
					     i18n_update_tags('cfg') ;
					     i18n_update_tags('dialogs') ;
					 }) ;
	      }
        }

        if (typeof window !== "undefined") {
            window.customElements.define('ws-cpucu_got', ws_cpucu_got) ;
        }


        /*
         *  Auxiliar to init_x & show_x
         */

        function show_cpuview_view ( )
        {
            var show_as_graph = get_cfg('CPUCU_show_graph') ;

            if (show_as_graph)
                 $('#cpu_view_graph1').tab("show") ;
            else $('#cpu_view_table1').tab("show") ;

	    setTimeout(function() { $("#infohw1").attr('components', 'elements'); }, 100);
        }

        function quick_config_cpuview ( )
        {
	    var o = "<div class='container mt-1'>" +
                    "<div class='row'>" +
                       quickcfg_html_header('Display format') +
	               quickcfg_html_btn("(*) Graph",
                                         "update_cfg(\"CPUCU_show_graph\", true);" +
				         "show_cpuview_view();",
                                         "col-6") +
	               quickcfg_html_btn("Text",
                                         "update_cfg(\"CPUCU_show_graph\", false);" +
				         "show_cpuview_view();",
                                         "col-6") +
                       quickcfg_html_br() +
                       quickcfg_html_header('Graph: split view') +
		       '<ws-slider-cpucu   name="slider4b" class="col-12"></ws-slider-cpucu>' +
                   //  '<ws-slider-details name="slider4a" class="col-12"></ws-slider-details>' +
                       quickcfg_html_br() +
                       quickcfg_html_header('Graph: quick interactive mode') +
	               quickcfg_html_btn("On: clk + dblclk",
                                         "update_cfg(\"is_quick_interactive\", true);",
                                         "col-7") +
	               quickcfg_html_btn("(*) Off: clk",
                                         "update_cfg(\"is_quick_interactive\", false);",
                                         "col-5") +
                       quickcfg_html_br() +
                       quickcfg_html_close('popover-cpuview') +
		    "</div>" +
		    "</div>" ;

	    return o ;
        }

