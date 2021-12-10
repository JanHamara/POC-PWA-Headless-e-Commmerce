import {Builder} from '@builder.io/react'
import BgMembershipCta from './index'

Builder.registerComponent(BgMembershipCta, {
    name: 'BG_Membership_CTA',
    defaultValue: {
        content:
            'With our tailor-made loyalty program <strong>BG Club</strong>, you accumulate points with each purchase. Already member? <strong>Sign in</strong>. Not one of our privileged members yet? Sign up quickly.'
    },
    inputs: [
        {
            name: 'content',
            type: 'string',
            defaultValue:
                'With our tailor-made loyalty program <strong>BG Club</strong>, you accumulate points with each purchase. Already member? <strong>Sign in</strong>. Not one of our privileged members yet? Sign up quickly.'
        }
    ]
})
