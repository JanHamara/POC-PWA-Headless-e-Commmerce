import {Builder} from '@builder.io/react'
import FeatureStack from './index'

Builder.registerComponent(FeatureStack, {
    name: 'FeatureStack',
    defaultValue: {
        content:
            'With our tailor-made loyalty program <strong>BG Club</strong>, you accumulate points with each purchase. Already member? <strong>Sign in</strong>. Not one of our privileged members yet? Sign up quickly.'
    },
    inputs: [
        {
            name: 'services',
            type: 'list',
            defaultValue: [
                {
                    icon: 'delivery',
                    heading: 'Livraison offerte',
                    content: "Sans minimum d'achat en Suisse et au Liechtenstein",
                    ctaLabel: "Plus d'infos",
                    ctaHref: 'https://www.bongenie-grieder.ch/fr/'
                },
                {
                    icon: 'diamond',
                    heading: 'Marques exclusives',
                    content: 'Totem Studio, Fedeli, Agolde, Paolo Pecora, Dondup…',
                    ctaLabel: 'Toutes nos marques',
                    ctaHref: 'https://www.bongenie-grieder.ch/fr/'
                },
                {
                    icon: 'connect',
                    heading: 'Click & Reserve',
                    content: 'Shoppez en ligne, essayez et retirez en magasin !',
                    ctaLabel: "Plus d'infos",
                    ctaHref: 'https://www.bongenie-grieder.ch/fr/'
                },
                {
                    icon: 'bgyou',
                    heading: 'BG & vous',
                    content: 'Une expérience shopping unique',
                    ctaLabel: 'Nos services exclusifs',
                    ctaHref: 'https://www.bongenie-grieder.ch/fr/'
                }
            ],
            subFields: [
                {
                    name: 'icon',
                    type: 'string',
                    required: true
                },
                {
                    name: 'heading',
                    type: 'string',
                    required: true
                },
                {
                    name: 'content',
                    type: 'string',
                    required: true
                },
                {
                    name: 'ctaLabel',
                    type: 'string',
                    defaultValue: "Plus d'infos"
                },
                {
                    name: 'ctaHref',
                    type: 'string',
                    required: true
                }
            ]
        }
    ]
})
