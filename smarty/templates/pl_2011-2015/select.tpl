{extends file='main.tpl'}
    {block name=additionalHead}
        <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css">
        <link href="{$settings->cdn_domain}css/vaa2015.css" rel="stylesheet">
    {/block}

    {block name=body}      
    <!-- header -->
      {include "page-header.tpl"}
      <!-- /header -->
      
      <div class="container results">
        <h3 style="color:white">{$t['select_member_state']}</h3>
      </div>
        <!-- map and categories -->
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div id="worldmap-container">
                    <div id="worldmap"></div>
                    
                </div>
            </div>

        </div>
      
      <!-- list -->
      <div class="container results">
        <div class="list-group">
          {foreach $countries as $c}
            {$anon = "another_name:original_name"}
            <a href="../?cc={$c->code}" class="list-group-item">{$c->name} / {$c->$anon}</a>
          {/foreach}
        </div>
      </div>
    {/block}   
    
    {block name=js}
        <script src="//cdn.bootcss.com/chroma-js/1.1.1/chroma.min.js"></script>
        <script src="//cdn.bootcss.com/topojson/1.6.19/topojson.min.js"></script>
        <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
        <script src="//cdn.bootcss.com/d3/3.5.6/d3.min.js"></script>
        <script src="map.js"></script>    
    {/block}

{block name=footer}
    <!-- footer -->
      {include "page-footer.tpl"}
      <!-- /footer -->
{/block}
