const serveyElement = (serveyData, onClickNext, onClickPrev) => {
    const optionElement = (optionData) => {
        return `
        <div class="option">
            <span class="option-name">
                ${optionData.title}
            </span>
        </div>`;
    };

    const serveyOptions = (optionList) => {
        let options;
        for (const option of optionList) {
            options += optionElement(option);
        }
        return options;
    }

    const mainElement = `
        <div class="title">
            <h3>${serveyData.title}</h3>
            <h5>${serveyData.description}</h5>
            <h4>${serveyData.topic}</h4>
        </div>

        <div class="option-custom">
                ${serveyOptions(serveyData.optionList)}
        </div>
        
        <div class="d-flex justify-content-between navigate">
            <div class="d-flex align-items-center page">
                <span class="page-index">${serveyData.page}</span>
            </div>
            <div class="navigate-btn">
                <button class="btn btn-lg btn-secondary border-4" 
                onclick="${onClickPrev}">
                    Quay lại
                </button>

                <button class="btn btn-lg btn-primary border-4" style="margin-left: 5px;"
                    onclick="${onClickNext}">
                    Tiếp tục
                </button>
            </div>
        </div>
    `;

    return mainElement;
}