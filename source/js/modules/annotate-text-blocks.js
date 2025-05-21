import { annotate, annotationGroup } from 'rough-notation';

const annotateTextBlocks = () => {
  const titles = Array.from(document.querySelectorAll('[data-lang-key="headersSection"]'));
  const titlesAnotation = titles.map((item) => annotate(item, { type: 'highlight', color: 'orange' }));
  annotationGroup(titlesAnotation).show();

  const introText = document.querySelector('.intro__text');
  const annotationIntroText = annotate(introText, { type: 'highlight', color: 'yellowgreen' });
  annotationIntroText.show();

  const aboutListItems = Array.from(document.querySelectorAll('.about__list-item p'));
  const aboutListItemsAnotation = aboutListItems.map((item) => annotate(item, { type: 'highlight', color: 'coral' }));
  annotationGroup(aboutListItemsAnotation).show();

  const aboutLinkItems = Array.from(document.querySelectorAll('.about__link'));
  const aboutLinkItemsAnotation = aboutLinkItems.map((item) => annotate(item, { type: 'box', color: 'red' }));
  annotationGroup(aboutLinkItemsAnotation).show();

  const textAccentItems = Array.from(document.querySelectorAll('.about__text--accent'));
  const textAccentItemsAnotation = textAccentItems.map((item) => annotate(item, { type: 'highlight', color: 'yellowgreen' }));
  annotationGroup(textAccentItemsAnotation).show();

  const portfolioLinks = Array.from(document.querySelectorAll('.portfolio__link'));
  const portfolioLinksAnotation = portfolioLinks.map((item) => annotate(item, { type: 'box', color: 'red' }));
  annotationGroup(portfolioLinksAnotation).show();

  const portfolioTabs = Array.from(document.querySelectorAll('.tabs__control-border'));
  const portfolioTabsAnotation = portfolioTabs.map((item) => annotate(item, { type: 'box', color: 'black' }));
  annotationGroup(portfolioTabsAnotation).show();
}

export { annotateTextBlocks };
