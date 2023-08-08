	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoLinkURL="https://www.amazon.com/dp/1739024206";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#ffffff";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#864302";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Show";bookConfig.aboutContactInfoTxt="<info><title>T2JzaWRpYW4gRWFnbGUgKGxpdGVyYXJ5IGd1ZXJpbGxhKQ</title><desc>UHVycG9zZWx5IGFic3RydXNlOyB0aGlzIHBvZXRpYyB3b3JrIG9mIGVwaWMgZmljdGlvbiBpcyBhY3R1YWxseSBwaGlsb3NvcGh5IGluIGRpc2d1aXNlLg0KDQpBcyBmb3IgdGhlIGNvbWVkeSBhbmdsZSwgdGhlIGF1dGhvciBhc2tzIHRoZSByZWFkZXIgdG8gdGhpbms6ICJXYXMgRGFudGUncyBEaXZpbmUgQ29tZWR5IGZ1bm55PyINCg0KQnV5IE5PVyBieSBjbGlja2luZyA8YSBocmVmPSJodHRwczovL3d3dy5hbWF6b24uY29tL2RwLzE3MzkwMjQyMDYiPjxiPkhFUkUhPC9hPjwvYj4NCg</desc><logo>Li9maWxlcy9leHRmaWxlcy9hYm91dC9vYnNpZGlhbmVhZ2xlX2FuX2VhZ2xlX2hlYWRfbG9nb19mcmVlX2xhcmdlX2ltYWdlX2luX3RoZV9zdHlsZV9jN2JkNzBiYy1lMThjLTRjMjUtOWY2MS03NjZhNWNmMzY4NjggKDEpLnBuZw</logo><keys/></info> ";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="No";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#998957";bookConfig.bgEndColor="#998757";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thick";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Enable";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.passwordTips="Please contact the <a href=\'mailto:author@sample.com\'><u>author</u></a> to access the web";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#873902";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=64;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2880;;bookConfig.securityType="1";bookConfig.CreatedTime ="230808024049";bookConfig.bookTitle="A Codex For Gnostics: Deluxe Edition";bookConfig.bookmarkCR="34365073f1a4bd1fe24a3f6ca405bc24ab76eec2";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"20238232216042","alpha":"1","spType":"null","fillStyle":"gradient","color":"2655423","gradientColorA":"2655423","gradientColorB":"2655423","angle":"360","spalpha":"1","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"-0.005555555555555556","y":"-0.003472222222222222","width":"1.0156944444444445","height":"0.3860243055555555","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"576"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"1","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoCallout","annoId":"20238232217533","alpha":"1","location":{"tannoName":"text1","x":"0.03611111111111111","y":"0.21006944444444445","width":"0.9305555555555556","height":"0.10208333333333332","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"576"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"1","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","bubbleType":"1","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Ancient\" SIZE=\"35\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><U>Special Collector&apos;s Item</U></FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Ancient\" SIZE=\"35\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><U>Special Collector&apos;s Item</U></FONT></P></TEXTFORMAT>","pageH":"576","pageW":"540"}},"background":{"alpha":"1","fillBg":"true","color":"16777215","color2":"16777215"},"hookDirect":"Down","hookContr1RatioX":"0.24895522388059704","hookContr1RatioY":"1","hookContr2RatioX":"0.7479104477611941","hookContr2RatioY":"1","hookContrPointRatioX":"0.4955223880597015","hookContrPointRatioY":"1.4961111111111112","cornerRadiut":"10","borderWidth":"3","borderColor":"16750848","bordreAlpha":"1"},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"20238232212118","alpha":"1","location":{"tannoName":"text2","x":"0.4805555555555556","y":"0.4739583333333333","width":"0.4865277777777778","height":"0.4427083333333333","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"576"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"1","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"MyriadSetPro-Thin\" SIZE=\"14\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">For a limited time, order your copy of <B>A Codex For Gnostics</B> then share a selfie of yourself with it on social media using the hashtag <FONT COLOR=\"#0000FF\">#ACFG</FONT> and Obsidian Eagle will send you one of his very own signatory hieroglyphs to press onto your book, free of charge!</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"MyriadSetPro-Thin\" SIZE=\"14\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"></FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"MyriadSetPro-Thin\" SIZE=\"14\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://www.amazon.com/dp/1739024206\" TARGET=\"_blank\"><B><U>BUY NOW</U></B></A></FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"MyriadSetPro-Thin\" SIZE=\"14\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">For a limited time, order your copy of <B>A Codex For Gnostics</B> then share a selfie of yourself with it on social media using the hashtag <FONT COLOR=\"#0000FF\">#ACFG</FONT> and Obsidian Eagle will send you one of his very own signatory hieroglyphs to press onto your book, free of charge!</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"MyriadSetPro-Thin\" SIZE=\"14\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"></FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"MyriadSetPro-Thin\" SIZE=\"14\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://www.amazon.com/dp/1739024206\" TARGET=\"_blank\"><B><U>BUY NOW</U></B></A></FONT></P></TEXTFORMAT>","pageH":"576","pageW":"360"}},"background":{"alpha":"1","fillBg":"true","color":"12509178"}},{"annotype":"com.mobiano.flipbook.pageeditor.textAnim::TAnnoTextAnim","annoId":"20238232213749","alpha":"1","effectType":"Default","location":{"tannoName":"text1","x":"0.03888888888888889","y":"0.08159722222222222","width":"0.9263888888888889","height":"0.07456597222222222","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"576"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Alef\" SIZE=\"21\" COLOR=\"#0000FF\" LETTERSPACING=\"0\" KERNING=\"0\">End of Preview</FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Alef\" SIZE=\"21\" COLOR=\"#0000FF\" LETTERSPACING=\"0\" KERNING=\"0\">End of Preview</FONT></P></TEXTFORMAT>","pageH":"576","pageW":"360"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"20238232218535","alpha":"1","mouseOverEffect":"2","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"false","imgScaleType":"false","location":{"tannoName":"image1","x":"0.46944444444444444","y":"0.5086805555555556","width":"0.5527777777777778","height":"0.2943576388888889","rotation":"89.85222850590118","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"360","pageHeight":"576"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"2800","imgOriginalHeight":"2100","url":"./files/pageConfig/IMG_20230807_162929_1.jpg","originalURL":"./files/pageConfig/IMG_20230807_162929_1.jpg","effect":{"effectType":"com.mobiano.flipbook.pageeditor.effect::TFlyEffect","triggerAction":"Fly","duration":"1","position":"left"}}]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}