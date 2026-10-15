import { StyleSheet } from 'react-native';

const COLORS = {
  background: '#0B0B14',
  white: '#FFFFFF',
  text: '#C2C2D0',
  muted: '#A8A8BC',
  purple: '#B9A6FF',
  purpleLight: '#D6C5FF',
  button: '#8064D8',
  green: '#72E0B0',
  placeholder: '#20202C',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 40,
  },

  loadingScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  loadingIndicator: {
    color: COLORS.purple,
  },

  loadingText: {
    color: COLORS.text,
    fontSize: 15,
    marginTop: 14,
  },

  hero: {
    width: '100%',
    height: 520,
    position: 'relative',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: COLORS.background,
    borderRadius: 10,
  },

  heroBackdrop: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius:10,
  },
  heroBackdropTint:{
     ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(11, 11, 20, 0.25)',

  },

  posterPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.placeholder,
  },

  heroPosterContainer: {
    position: 'absolute',
    top: 16,
    bottom: 125,
    width: '72%',
    alignSelf: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    zIndex: 2,
  },

  heroPoster:{
    width:'100%',
    height:'100%',
    borderRadius: 16,
 },

  heroGradientColors: [
    'transparent',
    'rgba(11,11,20,0.55)',
    COLORS.background,
  ],

  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
  },

  heroInfo: {
    paddingHorizontal: 22,
    paddingBottom: 28,
  },

  movieTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.white,
    marginBottom: 10,
    letterSpacing: 0.3,
  },

  heroRating: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.purpleLight,
  },

  movieContent: {
    width: '100%',
    paddingHorizontal: 20,
  },

  price: {
    fontSize: 23,
    fontWeight: '800',
    color: COLORS.purpleLight,
    marginBottom: 14,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: '800',
    marginTop: 28,
    marginBottom: 14,
    letterSpacing: 0.2,
  },

  genre: {
    color: '#B9A6FF',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 6,
    marginBottom: 8,
  },

  overview: {
    fontSize: 15,
    textAlign: 'left',
    color: COLORS.text,
    lineHeight: 24,
    marginBottom: 16,
  },

  description: {
    fontSize: 13,
    textAlign: 'center',
    color: '#9292A6',
    lineHeight: 21,
    marginTop: 32,
    marginHorizontal: 24,
  },

  cartButton: {
    backgroundColor: COLORS.button,
    borderRadius: 12,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 6,
  },

  cartButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },

  confirmation: {
    fontSize: 14,
    color: COLORS.green,
    marginTop: 12,
    fontWeight: '700',
    textAlign: 'center',
  },


  castList: {
    paddingVertical: 8,
    paddingRight: 8,
  },

  castCard: {
    width: 100,
    marginRight: 14,
    alignItems: 'center',
  },

  castPhoto: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#242430',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(185,166,255,0.4)',
  },

  castPhotoPlaceholder: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#242430',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(185,166,255,0.4)',
  },

  castPlaceholderText: {
    color: COLORS.purple,
    fontSize: 24,
    fontWeight: '700',
  },

  castName: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 5,
  },

  castCharacter: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
  },

  trailerContainer: {
    width: '100%',
    minHeight: 220,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#101018',
  },

  trailerMessage: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },

  trailerMessageText: {
    color: COLORS.text,
    fontSize: 14,
    marginTop: 10,
  },

merchSection: {
  marginTop: 28,
  marginBottom: 24,
},

merchDescription: {
  fontSize: 14,
  color: '#A8A8BC',
  marginTop: 8,
  marginBottom: 16,
  lineHeight: 21,
},

merchCard: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 14,
  marginBottom: 12,
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.10)',
  borderRadius: 14,
},

merchImage: {
  width: 90,
  height: 120,
  borderRadius: 10,
  backgroundColor: '#20202C',
},

merchInfo: {
  flex: 1,
  marginLeft: 14,
  justifyContent: 'center',
},

merchName: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 8,
},

merchPrice: {
  fontSize: 14,
  fontWeight: '600',
  color: '#B9A6FF',
  marginBottom: 12,
},

merchButton: {
  alignSelf: 'flex-start',
  paddingVertical: 9,
  paddingHorizontal: 14,
  backgroundColor: '#8064D8',
  borderRadius: 9,
},

merchButtonText: {
  color: '#fff',
  fontSize: 13,
  fontWeight: '600',
},

merchImagePlaceholder: {
  width: 90,
  height: 110,
  borderRadius: 10,
  backgroundColor: '#20202C',
  alignItems: 'center',
  justifyContent: 'center',
},

});

export default styles;