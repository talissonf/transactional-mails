# transactional-mails

Default transactional email templates for E-Com Plus stores

## Usage

The `@ecomplus/transactional-mails` package provides a
[list of methods](https://developers.e-com.plus/transactional-mails/transactionalMails.html)
to render email templates with received data.

Each method render a specific template, all of them returns
a promise that pass HTML markup on success.

```js
const transactionalMails = require('@ecomplus/transactional-mails')

transactionalMails.templateName(data, lang, themeColor)
  .then(html => {
    // HTML is a string
    console.log(html)
  })
  .catch(err => console.error(err))
```

- [Documentation](https://developers.e-com.plus/transactional-mails/)
- [Methods](https://developers.e-com.plus/transactional-mails/transactionalMails.html)

## Developing

1. Clone the repository:
```bash
git clone git@github.com:ecomclub/transactional-mails.git
```

2. Move to folder and install dependencies:
```bash
cd transactional-mails
npm i
```

3. Run dev server on http://localhost:3000/:
```bash
npm run serve
```

4. Add or edit templates on folders `views` / `scss`
and dictionary on `i18n` folder;

5. New templates must also be added to `src/index` as
exported lib method;

6. Update [jsdoc](https://jsdoc.app/)
generated documentation:
```bash
npm run doc
```

7. Commit changes following
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/);

8. Release and publish:
```bash
npm run release
git push --follow-tags origin master && npm publish
```
