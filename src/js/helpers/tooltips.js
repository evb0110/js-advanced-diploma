const makeIconsFunction = () => {
  const codes = {
    level: 0x1f396,
    attack: 0x2694,
    defence: 0x1f6e1,
    health: 0x2764,
  };

  const iconsObject = Object.entries(codes).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: String.fromCodePoint(value) }),
    {},
  );

  return iconName => iconsObject[iconName];
};

const iconsFn = makeIconsFunction();

const tooltips = ({
  level, attack, defence, health,
}) => {
  const [levelIcon, attackIcon, defenceIcon, healthIcon] = ['level', 'attack', 'defence', 'health'].map(item => iconsFn(item));

  return `${levelIcon}${level} ${attackIcon}${attack} ${defenceIcon}${defence} ${healthIcon}${health}`;
};

export default tooltips;
