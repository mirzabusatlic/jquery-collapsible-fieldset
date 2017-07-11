jquery-collapsible-fieldset
===========================

## Overview
jQuery plugin for Drupal-style collapsible fieldsets.

## Usage

````javascript
$("fieldset.collapsible").collapsible();
````

````html
<form>
	<fieldset class="collapsible">
		<legend>Fieldset Collapsible Legend</legend>
		<div>
        		<input type="text" />
		</div>
	</fieldset>
</form>
````

## Options

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `collapsed` | Set true if fieldset should be collapsed by default. | Boolean | false |
| `animation` | Should an animation be used when collapsing/expanding fieldset. | Boolean | true |
| `fade` | This is the speed at which the fieldset animation will occur. Integers in milliseconds are accepted, as well as standard jQuery speed strings (slow, normal, fast). | Integer or String | medium |
