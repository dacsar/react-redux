const NavBarStyles = theme => ({
  appbar: {
    position: 'fixed',
  },
  menuicon: {
    marginRight: 20,
    marginLeft: -10
  },
  title:{
    fontSize: 35,
  }
});

const QxStyles  = theme => ({
  headerwrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '10%',
    width: '100%',
    backgroundColor: 'rgba(6, 147, 227, 0.6)'
  },
  headertitlewrapper: {
    height: '100%',
    width: '100%',
  },
  headertitle: {
    color: '#ffffff',
  },
  contentwrapper: {
    position: 'absolute',
    width: '90%',
    height: '20%',
    top: '10%',
    left: '5%',
    borderBottom: 'medium solid #f5f5f5'
  },
  radioswrapper: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    top: '30%',
    left: '12%',
  },
  radiowrapper: {
    width: '100%',
  },
  contentsubtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#37474f',
  },
  contenttext: {
    fontSize: 15,
    color: '#37474f',
    opacity: '0.7'
  },
  radiotext: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  test: {
    border: 'medium solid #f5f5f5'
  }
});

const QuestionStyles = theme => ({
  base: {
    position: 'fixed',
    top: '10%',
    width: '50%',
    height: '80%',
  },
  content: {
    height: '90%'
  },
  stepperwrapper: {
    height: '10%'
  },
  closeicon: {
    color: '#ffffff',
  },
  closebuttonwrapper: {
    position: 'absolute',
    right: '20%',
    top: '2.5%',
  },
});

const ContentStyles = theme => ({
  contentwrapper: {
    position: 'relative',
    width: '100%',
    height: 3000,
    backgroundColor: '#f5f5f5',
  },
});

const HeaderStyles = theme => ({
  header: {
    position: 'absolute',
    width: '100%',
    height: '26%',
    backgroundColor: 'rgba(6, 147, 227, 0.6)',
  },
  headertitle: {
    position: 'absolute',
    fontSize: 40,
    color: '#f5f5f5',
    fontWeight: 'bold',
    top: '15%'
  }
});

const ContentStep1Styles = theme => ({
  step1wrapper: {
    position: 'absolute',
    width: '100%',
    height: '26%',
    top: '26%',
  },
  step1contentwrapper: {
    width: '100%',
    height: '90%',
  },
  subtitlewrapper: {
    width: '100%',
    height: '15%',
  },
  itemswrapper: {
    width: '100%',
    height: '60%',
  },
  textwrapper: {
    width: '100%',
    height: '25%',
  },
  item: {
    width: '25%',
    height: '80%',
    borderRadius: 20,
  },
  selecteditem: {
    width: '31.25%',
    height: '100%',
    borderRadius: 20,
  },
  img: {
    width: '100%',
    height: '60%',
    backgroundSize: 'cover',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  subtitle: {
    fontWeight: 'bold',
    color: '#37474f',
    fontSize: 28,
  },
  titleinpaperwrapper: {
    width: '100%',
    height: '40%',
  },
  titleinpaper :{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#37474f',
  },
  selectedtitleinpaper :{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#37474f',
  },
  textinbottom: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#37474f',
  },
  texttopwrapper: {
    paddingTop: '2.5%',
    width: '100%',
    height: '50%',
  },
  textbottomwrapper: {
    width: '100%',
    height: '50%',
  },
})

const ContentStep2Styles = theme => ({
  step2wrapper: {
    position: 'absolute',
    width: '100%',
    height: '15%',
    top: '52%',
    backgroundColor: '#0d47a1',
  },
  step2topwrapper: {
    width: '100%',
    height: '70%',
  },
  step2bottomwrapper: {
    width: '100%',
    height: '30%',
  },
  subtitle: {
    color: '#f5f5f5',
    fontSize: 35,
    fontWeight: 'bold',
  },
  button: {
    color: '#0d47a1'
  }
})

const ContentStep3Styles = theme => ({
  step3wrapper: {
    position: 'absolute',
    width: '100%',
    height: '15%',
    top: '67%',
    backgroundColor: 'rgba(6, 147, 227, 0.6)'
  },
  step3topwrapper: {
    width: '100%',
    height: '70%',
  },
  step3bottomwrapper: {
    width: '100%',
    height: '30%',
  },
  subtitle: {
    color: '#f5f5f5',
    fontSize: 35,
    fontWeight: 'bold',
  },
  button: {

  }
})

const ContentStep4Styles = theme => ({
  step4wrapper: {
    position: 'absolute',
    width: '100%',
    height: '13%',
    top: '82%',
    backgroundColor: '#0d47a1',
  },
  step4topwrapper: {
    width: '100%',
    height: '70%',
  },
  step4bottomwrapper: {
    width: '100%',
    height: '30%',
  },
  subtitle: {
    color: '#f5f5f5',
    fontSize: 35,
    fontWeight: 'bold',
  },
  button: {
    color: '#0d47a1'
  }
})

const FooterStyles = theme => ({
  footerwrapper: {
    position: 'absolute',
    width: '100%',
    height: '5%',
    top: '95%',
    backgroundColor: 'rgba(6, 147, 227, 0.6)',
  },
  footertopwrapper: {
    width: '100%',
    height: '70%',
  },
  footerbottomwrapper: {
    width: '100%',
    height: '30%',
  },
  subtitle: {
    color: '#f5f5f5',
    fontSize: 35,
    fontWeight: 'bold',
  },
})

export {QxStyles, QuestionStyles, ContentStyles, NavBarStyles,
        ContentStep1Styles, ContentStep2Styles, HeaderStyles, ContentStep3Styles,
        ContentStep4Styles, FooterStyles};