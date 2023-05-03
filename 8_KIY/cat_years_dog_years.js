/**
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
 */

const humanYearsCatYearsDogYears = hy => Object.values([...Array(hy)].reduce((acc, item, index) => {
  switch(index){
      case 0: 
      {
        acc.human = index + 1;
        acc.cat += 15;
        acc.dog += 15;
        break;
      }
      case 1:
      {
        acc.human = index + 1;
        acc.cat += 9;
        acc.dog += 9;
        break;
      }
      default:
      {
        acc.human = index + 1;
        acc.cat += 4;
        acc.dog += 5;
      }
  }
  return acc;
}, {human: 0, cat: 0, dog: 0}));  


// Optimize
// const humanYearsCatYearsDogYears = h => [h, (h - 1 ? 16 : 11) + 4 * h, (h - 1 ? 14 : 10) + 5 * h];