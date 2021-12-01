export default {
    baseStyle: {
        container: {
            w: 'full',
            pos: 'relative',
            overflow: 'hidden'
        },
        label: {
            fontSize: {base: '35px', md: '40px'},
            fontWeight: 'semibold',
            textTransform: 'uppercase',
            lineHeight: '30px',
            mt: 0
        },
        description: {
            maxW: {base: '80vw', md: 'full'},
            fontSize: {base: '24px', md: '60px'},
            lineHeight: '50px',
            fontFamily: 'heading'
        },
        arrow: {
            cursor: 'pointer',
            pos: 'absolute',
            top: '50%',
            w: 'auto',
            mt: '-22px',
            p: '16px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            transition: '0.6s ease',
            borderRadius: '0 3px 3px 0',
            userSelect: 'none',
            _hover: {
                opacity: 0.8,
                bg: 'black'
            }
        }
    },
    parts: ['container', 'label', 'arrow']
}
