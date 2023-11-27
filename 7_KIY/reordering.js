/*
There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Examples
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
*/

function reOrdering(text) {
    const words = text.split(' ');
    const first_word = words.filter(v => v.match(/[A-Z]\w*/));
    const other_words = words.filter(v => !v.match(/[A-Z]\w*/));
    return first_word.concat(other_words).join(' ');
}