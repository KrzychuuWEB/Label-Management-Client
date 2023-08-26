export const getCheckedNutritionalValues = (nutritionalValuesFormField, nutritionalValues) => {
    let usedNutritionalValuesArray = [];

    nutritionalValuesFormField.map((item) => {
        if (item.checked) {
            nutritionalValues.nutritionalValues.map((value) => {
                if (value.id === item.id) {
                    usedNutritionalValuesArray.push(value);
                }
            });
        }
    });

    return usedNutritionalValuesArray;
};

export const addValueAndCheckedFieldToNutritionalValueNames = (nutritionalNames) => {
    const arrayWithWithNewProperty = nutritionalNames;

    arrayWithWithNewProperty.map(item => {
        item.value = "";
        item.checked = false;
    })
    return arrayWithWithNewProperty;
};

export const getSortedNutritionalValuesByPriority = (nutritionalValues) => {
    return nutritionalValues.sort((a, b) => a.priority - b.priority)
}