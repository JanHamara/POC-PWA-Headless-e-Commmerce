export default {
    baseStyle: {
        container: {
            w: 'full',
            maxW: 'container.xl',
            mx: 'auto',
            h: 'auto',
            justifyContent: 'space-between',
            flexDirection: {base: 'column', lg: 'row'},
            alignItems: {base: 'center', md: 'flex-start'},
            flexWrap: 'nowrap',
            py: 8
        },
        item: {
            flex: 1,
            mb: {base: 8, md: 0}
        }
    },
    parts: ['container', 'item']
}
