<!-- text input -->
<label for="{$key}"><strong>{$input.name}</strong>
{if (isset($input.description)) and (trim($input.description) != '')}
<br/>{$input.description}
{/if}
</label>
<input name="" id="{$key}" placeholder="{$input.name}" value="{$input.value}" type="text">
<!-- /text input -->
