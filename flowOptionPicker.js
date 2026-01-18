import { LightningElement, api, track } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class FlowOptionPicker extends LightningElement {
    // ===== Inputs =====
    @api labels = [];
    @api descriptions; // optional
    @api iconNames;    // optional
    @api keys = [];

    @api defaultSelectedKey;
    @api specialKey;

    @api minCardWidth = 260;
    @api density = 'comfortable';

    // ===== Output =====
    @api selectedKey;

    @track options = [];
    @track specialOption;

    containerClass;
    containerStyle;

    connectedCallback() {
        this.buildOptions();
        this.applyDefaultSelection();
    }

    buildOptions() {
        // Normalise optional collections safely
        const descriptions = Array.isArray(this.descriptions)
            ? this.descriptions
            : [];

        const iconNames = Array.isArray(this.iconNames)
            ? this.iconNames
            : [];

        // Length driven ONLY by required collections
        const length = Math.min(
            this.labels.length,
            this.keys.length
        );

        const densityClass = `density-${this.normalisedDensity}`;

        this.containerStyle = `--min-card-width:${this.minCardWidth}px;`;
        this.containerClass = 'option-container';

        this.options = [];
        this.specialOption = null;

        for (let i = 0; i < length; i++) {
            const key = this.keys[i];

            const base = {
                key,
                label: this.labels[i],
                description: descriptions[i] || null,
                iconName: iconNames[i] || null
            };

            if (this.specialKey && key === this.specialKey) {
                this.specialOption = {
                    ...base,
                    selected: false,
                    cssClass: `special-row ${densityClass}`
                };
            } else {
                this.options.push({
                    ...base,
                    cssClass: `option-card ${densityClass}`
                });
            }
        }
    }

    applyDefaultSelection() {
        if (this.defaultSelectedKey) {
            this.setSelection(this.defaultSelectedKey);
        }
    }

    handleSelect(event) {
        const key = event.currentTarget.dataset.key;
        this.setSelection(key);
    }

    setSelection(key) {
        const densityClass = `density-${this.normalisedDensity}`;

        if (this.specialOption) {
            this.specialOption = {
                ...this.specialOption,
                selected: this.specialOption.key === key,
                cssClass:
                    this.specialOption.key === key
                        ? `special-row selected ${densityClass}`
                        : `special-row ${densityClass}`
            };
        }

        this.options = this.options.map(opt => ({
            ...opt,
            cssClass:
                opt.key === key
                    ? `option-card selected ${densityClass}`
                    : `option-card ${densityClass}`
        }));

        this.selectedKey = key;

        this.dispatchEvent(
            new FlowAttributeChangeEvent('selectedKey', this.selectedKey)
        );
    }

    get normalisedDensity() {
        return this.density === 'compact' ? 'compact' : 'comfortable';
    }
}
