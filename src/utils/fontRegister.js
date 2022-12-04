import {Font} from './reactpdf';
import font from '../static/fonts/Roboto-Regular.ttf';
import fontBold from '../static/fonts/Roboto-Bold.ttf';

const fontRegister = () => {
    Font.register({
        family: 'Roboto',
        format: "truetype",
        src: font,
    });

    Font.register({
      family: 'RobotoBold',
      format: "truetype",
      src: fontBold,
  });
}

export default fontRegister