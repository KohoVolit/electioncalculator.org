<!-- radio input -->
<fieldset data-role="controlgroup" data-type="horizontal">
    <legend><strong>{$input.name}</strong>
    {if (isset($input.description)) and (trim($input.description) != '')}
      <br/>{$input.description}
    {/if}
    </legend>
    {foreach $input.value as $iv}
      <input name="{$key}" id="{$key}{$iv}" value="{$iv}" 
      {if $iv == {$input.default}}
        checked="checked"
      {/if}
      type="radio">
      <label for="{$key}{$iv}">{$iv}</label>
    {/foreach}

</fieldset>
<!-- /radio input -->
