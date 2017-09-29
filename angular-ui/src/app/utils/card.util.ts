export class CardUtil {

  static whiteMana  = '<img alt="{W}" src="../../assets/symbols/W.svg" width="25" height="25">';
  static blackMana = '<img alt="{B}" src="../../assets/symbols/B.svg" width="25" height="25">';
  static blueMana = '<img alt="{U}" src="../../assets/symbols/U.svg" width="25" height="25">';
  static redMana = '<img alt="{R}" src="../../assets/symbols/R.svg" width="25" height="25">';
  static greenMana = '<img alt="{G}" src="../../assets/symbols/G.svg" width="25" height="25">';
  static colorlessMana = '<img alt="{C}" src="../../assets/symbols/C.svg" width="25" height="25">';
  static snowMana = '<img alt="{S}" src="../../assets/symbols/S.svg" width="25" height="25">';

  static xMana = '<img alt="{X}" src="../../assets/symbols/X.svg" width="25" height="25">';
  static yMana = '<img alt="{Y}" src="../../assets/symbols/Y.svg" width="25" height="25">';
  static zMana = '<img alt="{Z}" src="../../assets/symbols/Z.svg" width="25" height="25">';

  static generic1 = '<img alt="{1}" src="../../assets/symbols/1.svg" width="22" height="22">';
  static generic2 = '<img alt="{2}" src="../../assets/symbols/2.svg" width="22" height="22">';
  static generic3 = '<img alt="{3}" src="../../assets/symbols/3.svg" width="22" height="22">';
  static generic4 = '<img alt="{4}" src="../../assets/symbols/4.svg" width="22" height="22">';
  static generic5 = '<img alt="{5}" src="../../assets/symbols/5.svg" width="22" height="22">';
  static generic6 = '<img alt="{6}" src="../../assets/symbols/6.svg" width="22" height="22">';
  static generic7 = '<img alt="{7}" src="../../assets/symbols/7.svg" width="22" height="22">';
  static generic8 = '<img alt="{8}" src="../../assets/symbols/8.svg" width="22" height="22">';
  static generic9 = '<img alt="{9}" src="../../assets/symbols/9.svg" width="22" height="22">';
  static generic10 = '<img alt="{10}" src="../../assets/symbols/10.svg" width="22" height="22">';
  static generic11 = '<img alt="{11}" src="../../assets/symbols/11.svg" width="22" height="22">';
  static generic12 = '<img alt="{12}" src="../../assets/symbols/12.svg" width="22" height="22">';
  static generic13 = '<img alt="{13}" src="../../assets/symbols/13.svg" width="22" height="22">';
  static generic14 = '<img alt="{14}" src="../../assets/symbols/14.svg" width="22" height="22">';
  static generic15 = '<img alt="{15}" src="../../assets/symbols/15.svg" width="22" height="22">';
  static generic16 = '<img alt="{16}" src="../../assets/symbols/16.svg" width="22" height="22">';
  static generic17 = '<img alt="{17}" src="../../assets/symbols/17.svg" width="22" height="22">';
  static generic18 = '<img alt="{18}" src="../../assets/symbols/18.svg" width="22" height="22">';
  static generic19 = '<img alt="{19}" src="../../assets/symbols/19.svg" width="22" height="22">';
  static generic20 = '<img alt="{20}" src="../../assets/symbols/20.svg" width="22" height="22">';

  static whitePhyrexian = '<img alt="{WP}" src="../../assets/symbols/WP.svg" width="25" height="25">';
  static blackPhyrexian = '<img alt="{BP}" src="../../assets/symbols/BP.svg" width="25" height="25">';
  static bluePhyrexian = '<img alt="{UP}" src="../../assets/symbols/UP.svg" width="25" height="25">';
  static redPhyrexian = '<img alt="{RP}" src="../../assets/symbols/RP.svg" width="25" height="25">';
  static greenPhyrexian = '<img alt="{GP}" src="../../assets/symbols/GP.svg" width="25" height="25">';
  static colorlessPhyrexian = '<img alt="{P}" src="../../assets/symbols/P.svg" width="25" height="25">';

  static whiteBlackHybrid = '<img alt="{WB}" src="../../assets/symbols/WB.svg" width="25" height="25">';
  static whiteBlueHybrid = '<img alt="{WU}" src="../../assets/symbols/WU.svg" width="25" height="25">';
  static blueBlackHybrid = '<img alt="{UB}" src="../../assets/symbols/UB.svg" width="25" height="25">';
  static blueRedHybrid = '<img alt="{UR}" src="../../assets/symbols/UR.svg" width="25" height="25">';
  static blackRedHybrid = '<img alt="{BR}" src="../../assets/symbols/BR.svg" width="25" height="25">';
  static blackGreenHybrid = '<img alt="{BG}" src="../../assets/symbols/BG.svg" width="25" height="25">';
  static redGreenHybrid = '<img alt="{RG}" src="../../assets/symbols/RG.svg" width="25" height="25">';
  static redWhiteHybrid = '<img alt="{RW}" src="../../assets/symbols/RW.svg" width="25" height="25">';
  static greenWhiteHybrid = '<img alt="{GW}" src="../../assets/symbols/GW.svg" width="25" height="25">';
  static greenBlueHybrid = '<img alt="{GU}" src="../../assets/symbols/GU.svg" width="25" height="25">';

  static energySymbol = '<img alt="{E}" src="../../assets/symbols/E.svg" width="25" height="25">';
  static tapSymbol = '<img alt="{T}" src="../../assets/symbols/T.svg" width="25" height="25">';
  static untapSymbol = '<img alt="{Q}" src="../../assets/symbols/Q.svg" width="25" height="25">';

  static genericManaSymbol(number: string): string {
    return '<span ngStyle="{background-color: red}">' + number + '</span>';
  }

  static parseAllSymbols(text: string, cardName: string): string {
    // replace regular mana first
    return text.replace(/{W}/gi, CardUtil.whiteMana)
      .replace(/{B}/gi, CardUtil.blackMana)
      .replace(/{U}/gi, CardUtil.blueMana)
      .replace(/{R}/gi, CardUtil.redMana)
      .replace(/{G}/gi, CardUtil.greenMana)
      .replace(/{C}/gi, CardUtil.colorlessMana)
      .replace(/{S}/gi, CardUtil.snowMana)
      // letters
      .replace(/{X}/gi, CardUtil.xMana)
      .replace(/{Y}/gi, CardUtil.yMana)
      .replace(/{Z}/gi, CardUtil.zMana)
      // generics
      // this is really stupid, but apparently we can't do this dynamically, so whatever...
      .replace(/\{1\}/gi, CardUtil.generic1)
      .replace(/\{2\}/gi, CardUtil.generic2)
      .replace(/\{3\}/gi, CardUtil.generic3)
      .replace(/\{4\}/gi, CardUtil.generic4)
      .replace(/\{5\}/gi, CardUtil.generic5)
      .replace(/\{6\}/gi, CardUtil.generic6)
      .replace(/\{7\}/gi, CardUtil.generic7)
      .replace(/\{8\}/gi, CardUtil.generic8)
      .replace(/\{9\}/gi, CardUtil.generic9)
      .replace(/\{10\}/gi, CardUtil.generic10)
      .replace(/\{11\}/gi, CardUtil.generic11)
      .replace(/\{12\}/gi, CardUtil.generic12)
      .replace(/\{13\}/gi, CardUtil.generic13)
      .replace(/\{14\}/gi, CardUtil.generic14)
      .replace(/\{15\}/gi, CardUtil.generic15)
      .replace(/\{16\}/gi, CardUtil.generic16)
      .replace(/\{17\}/gi, CardUtil.generic17)
      .replace(/\{18\}/gi, CardUtil.generic18)
      .replace(/\{19\}/gi, CardUtil.generic19)
      .replace(/\{20\}/gi, CardUtil.generic20)
      // pyrexian mana
      .replace(/{W\/P}/gi, CardUtil.whitePhyrexian)
      .replace(/{B\/P}/gi, CardUtil.blackPhyrexian)
      .replace(/{U\/P}/gi, CardUtil.bluePhyrexian)
      .replace(/{R\/P}/gi, CardUtil.redPhyrexian)
      .replace(/{G\/P}/gi, CardUtil.greenPhyrexian)
      .replace(/{P}|{H}/gi, CardUtil.colorlessPhyrexian) // idk if this is ever used, but just in case...
      // hybrid mana (don't know if the rnn will respect order on these, so just check for both)
      .replace(/{W\/B}|{B\/W}/gi, CardUtil.whiteBlackHybrid)
      .replace(/{W\/U}|{U\/W}/gi, CardUtil.whiteBlueHybrid)
      .replace(/{U\/B}|{B\/U}/gi, CardUtil.blueBlackHybrid)
      .replace(/{U\/R}|{R\/B}/gi, CardUtil.blueRedHybrid)
      .replace(/{B\/R}|{R\/B}/gi, CardUtil.blackRedHybrid)
      .replace(/{B\/G}|{G\/B}/gi, CardUtil.blackGreenHybrid)
      .replace(/{R\/G}|{G\/R}/gi, CardUtil.redGreenHybrid)
      .replace(/{R\/W}|{W\/R}/gi, CardUtil.redWhiteHybrid)
      .replace(/{G\/W}|{W\/G}/gi, CardUtil.greenWhiteHybrid)
      .replace(/{G\/U}|{U\/G}/gi, CardUtil.greenBlueHybrid)
      // other symbols
      .replace(/{E}/gi, CardUtil.energySymbol)
      .replace(/{T}/gi, CardUtil.tapSymbol)
      .replace(/{Q}/gi, CardUtil.untapSymbol)
      // some text formatting
      .replace(/\n/gi, '<br/>')
      .replace(/@/gi, cardName);
  }
}
