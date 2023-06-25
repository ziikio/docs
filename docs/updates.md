# Updates

## October 30th 2020
### Content
We have moved news, events and group debates into one single [content](/v2/content/) namespace and updated the documentation accordingly

## July 27th 2020
### Reference Fields
We have added reference fields to [users](/v2/users/), [units](/v2/units/) and [user types](/v2/usertypes/) to allow external systems to identify entities in Ziik and cross-reference them with their own identifiers.

### Multiple Unit Memberships
Users can belong to multiple units and have different user types in each unit. See the [documentation on unit memberships](/v2/users/unit-memberships).
::: warning
Assigning unit and user types through updating users will only take effect, if the user has one unit membership. Multiple unit memberships will not be changed through this endpoint.
Deprecation notice: By end of December 2020, it will no longer be possible to assign unit and user types through updating users.
:::

### File Uploads
Uploading files should now be done directly to Ziik's centralised storage. See the [documentation on file uploads](/v2/file/upload).
::: warning
Deprecation notice: By the end of December 2020, it will no longer be possible to upload files to news, faqs etc. through /api/news/ID/files, /api/faq/ID/files etc.
:::