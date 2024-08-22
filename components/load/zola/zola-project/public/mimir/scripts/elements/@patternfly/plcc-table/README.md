# Plcc table Element

Product lifecycle table web component.

## Usage

Describe how best to use this web component along with best practices.

```html
<plcc-table>
</plcc-table>
```

## Attributes

**`product-name`**

Use this attribute when fetching data from the api. Pass the product name as the value for the api's path to use.

```html
<plcc-table product-name="Red Hat Enterprise Linux"></plcc-table>
```
**`hide-eol`**

When this attribute is present, the End of Life versions will be hidden

```html
<plcc-table product-name="Red Hat Enterprise Linux" hide-eol></plcc-table>
```

**`toggle-eol`**

Use this attribute to add a checkbox to toggle End of Life versions (default set to show all versions)

```html
<plcc-table product-name="Red Hat Enterprise Linux" toggle-eol></plcc-table>
```

**`toggle-eol hide-eol`**

When these two attributes could be used together, all End of Life versions will be hidden by default

```html
<plcc-table product-name="Red Hat Enterprise Linux" toggle-eol hide-eol></plcc-table>
```

**`expandable`**

Use this attribute to make version category expandable

```html
<plcc-table product-name="Red Hat Enterprise Linux" expandable></plcc-table>
```


### Compact styles
To enable compact styles add a class of 'compact' to the `<plcc-table>` tag

```html
<plcc-table product-name="Red Hat Enterprise Linux" class="compact"></plcc-table>
```

## Passing data to plcc-table

Here's a basic example on now to pass data to the component. This data **must** match the structure provided by the api in order for the component to render properly.

```html
<plcc-table id="someId" type="app"></plcc-table>

<script>
    const data = {someObject};

    const plccExampleTable = document.querySelector("#someId");
    plccExampleTable.tableData = data;
</script>
```


## Dev
Run this command from the cp-elements root and select plcc-table. This will start the plcc-table demo. You can test your changes here. 


    npm start


## Build

    npm run build


## Releasing this component

Once you have merged your changes we need to publish to NPM.

Here's steps you can use to publish the component:

1. Go to the component's folder, that has the package.json file in it.
2. Make sure the organization (e.g. ` "name": "@cpelements/plcc-table"`) is correct
3. Update the version in the package.json, or use the `npm version` command, e.g. run `npm version patch` from the component folder.
4. `npm run build` (this will make sure the JS will have the proper version in the compiled code)
5. `npm publish --access=public`
6. When succesful be sure to commit the updated package.json file.

Since the [lifecycle application](https://access.redhat.com/product-life-cycles/) is pulling in the component via NPM, the plcc-table is now ready to be used. However, Product lifecycle pages (e.g. [Openshift](https://access.redhat.com/support/policy/updates/openshift/)) pull in the component via chrometwo_require, so the new component version will need to be released to CP-CHROME to be used on these pages. Please contact Tyler Martin or anyone on the DXP-FED team to release the new version in CP-CHROME.

