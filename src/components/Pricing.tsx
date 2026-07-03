import { useState } from 'react';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(false);

  const tiers = [
    {
      name: 'Starter',
      priceMonthly: 0,
      priceAnnual: 0,
      description: 'Ideal for testing features, side projects, and personal portfolios.',
      features: [
        'Access to basic components',
        'Responsive layouts',
        'Tailwind v4 pre-integration',
        'Standard documentation access',
        'Community forum support',
      ],
      cta: 'Start for Free',
      popular: false,
    },
    {
      name: 'Pro Pack',
      priceMonthly: 29,
      priceAnnual: 19,
      description: 'Perfect for professional developers, freelancers, and small teams.',
      features: [
        'All Starter tier features',
        'Premium high-fidelity components',
        'Figma UI original design file',
        'Priority email support (24h)',
        'Commercial license for 5 websites',
        'Free upgrades for life',
      ],
      cta: 'Go Pro Now',
      popular: true,
    },
    {
      name: 'Enterprise',
      priceMonthly: 99,
      priceAnnual: 79,
      description: 'Built for enterprise organizations demanding full customization.',
      features: [
        'All Pro Pack features',
        'Unlimited website licenses',
        'Custom layout request service',
        'Dedicated Slack channel support',
        '1-on-1 architecture review',
        'SLA guaranteed assistance',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Flexible Pricing
          </h2>
          <p className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Choose the Plan That Fits Your Vision
          </p>
          
          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-sm font-medium ${!annualBilling ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-violet-600 transition-transform ${
                  annualBilling ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annualBilling ? 'text-slate-900 dark:text-white' : 'text-slate-400'} flex items-center gap-1.5`}>
              Annual
              <span className="px-2 py-0.5 text-[10px] font-bold text-violet-700 bg-violet-100 dark:bg-violet-950 dark:text-violet-300 rounded-full">
                Save 30%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-[1400px] mx-auto">
          {tiers.map((tier, idx) => {
            const price = annualBilling ? tier.priceAnnual : tier.priceMonthly;
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  tier.popular
                    ? 'bg-slate-50 dark:bg-slate-900/50 border-2 border-violet-500 shadow-2xl shadow-violet-500/10'
                    : 'bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-800'
                }`}
              >
                {/* Popular Ribbon Tag */}
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Most Popular
                  </span>
                )}

                {/* Top Content */}
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mb-6 min-h-[36px]">
                    {tier.description}
                  </p>
                  
                  {/* Pricing value */}
                  <div className="flex items-baseline text-slate-900 dark:text-white mb-6">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl">$</span>
                    <span className="font-display font-extrabold text-5xl sm:text-6xl tracking-tight">
                      {price}
                    </span>
                    <span className="font-sans text-sm text-slate-500 dark:text-slate-400 ml-2">
                      /month
                    </span>
                  </div>

                  {/* Checklist Divider */}
                  <hr className="border-slate-200/60 dark:border-slate-800/60 mb-6" />

                  {/* Features list */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="p-0.5 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-sans text-sm text-slate-600 dark:text-slate-350 leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action button */}
                <button
                  className={`w-full py-3.5 px-4 rounded-2xl font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    tier.popular
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 hover:opacity-95'
                      : 'bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Sub-disclaimer */}
        <div className="flex items-center justify-center gap-2 mt-12 text-xs text-slate-400 dark:text-slate-500">
          <Info className="h-4 w-4" />
          <span>All plans are subject to our standard Terms of Service. Cancel anytime.</span>
        </div>

      </div>
    </section>
  );
}
