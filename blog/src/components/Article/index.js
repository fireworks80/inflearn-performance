import './index.css';

const zeroPad = (value, len) => {
  const str = '0000000000' + value.toString();
  return str.substring(str.length - len);
};

function getParametersForUnsplash({ width, height, quality, format }) {
  return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
}

function removeSpecialCharacter(str) {
  /*
  const removeCharacters = ['#', '_', '*', '~', '&', ';', '!', '[', ']', '`', '>', '\n', '=', '-'];
  let _str = str;
  let i = 0,
    j = 0;

  for (i = 0; i < removeCharacters.length; i++) {
    j = 0;
    while (j < _str.length) {
      if (_str[j] === removeCharacters[i]) {
        _str = _str.substring(0, j).concat(_str.substring(j + 1));
        continue;
      }
      j++;
    }
  }
  */

  let _str = str.substring(0, 300);

  _str.replace(/[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/gi, '');

  return _str;
}

const Article = (props) => {
  const createTime = new Date(props.createdTime);

  return (
    <div className='Article'>
      <div className={'Article__summary'}>
        <div className={'Article__summary__title'}>{props.title}</div>
        <div className={'Article__summary__desc'}>{removeSpecialCharacter(props.content)}</div>
        <div className={'Article__summary__dtc'}>
          {createTime.getFullYear() +
            '.' +
            zeroPad(createTime.getMonth() + 1, 2) +
            '.' +
            zeroPad(createTime.getDate(), 2)}
        </div>
      </div>
      <div className={'Article__thumbnail'}>
        <img
          src={props.image + getParametersForUnsplash({ width: 240, height: 240, quality: 80, format: 'jpg' })}
          alt='thumbnail'
        />
      </div>
    </div>
  );
};

export default Article;
