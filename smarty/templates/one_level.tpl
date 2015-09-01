<div class="level">
{foreach $ar as $key => $input}
  {if is_array($input)}
    {assign var=$nar value=$ar}
    {assign var=$ar value=$input}
    {include file="one_level.tpl"}
    {assign var=$ar value=$nar}
  {else}
      {if isset($input.type)}
        {if ($input.type == 'radio')}
          {include file="radio_input.tpl"}  
        {else}
          {include file="text_input.tpl"}
        {/if}
      {else}
        {include file="text_input.tpl"}
      {/if}
  {/if}
{/foreach}
</div> <!-- /level -->
