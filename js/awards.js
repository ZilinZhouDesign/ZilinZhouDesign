async function loadAwards() {
    try {
        console.log('Starting to load awards...');
        const response = await fetch('about/awards.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('JSON file fetched successfully');
        
        const data = await response.json();
        const awards = data.awards;
        console.log('Parsed awards:', awards);

        // 按年份分组
        const awardsByYear = {};
        awards.forEach(award => {
            const year = award.year;
            if (!awardsByYear[year]) {
                awardsByYear[year] = [];
            }
            awardsByYear[year].push(award);
        });

        // 生成HTML
        let awardsHTML = '';
        Object.keys(awardsByYear)
            .sort((a, b) => b - a) // 按年份降序排序
            .forEach(year => {
                awardsHTML += `
                    <li>
                        <span class="year">${year}</span>
                        <div class="detail-group">
                            ${awardsByYear[year].map(award => `
                                <div class="award-group">
                                    <div class="competition">${award.competition}</div>
                                    <div class="award-info">${award.award}</div>
                                    <div class="project-type">${award.type}</div>
                                </div>
                            `).join('')}
                        </div>
                    </li>
                `;
            });

        // 更新DOM
        const awardsContainer = document.querySelector('#awards-list');
        awardsContainer.innerHTML = awardsHTML;
    } catch (error) {
        console.error('Error details:', error);
        const awardsContainer = document.querySelector('#awards-list');
        awardsContainer.innerHTML = `<li>Error loading awards: ${error.message}</li>`;
    }
}

document.addEventListener('DOMContentLoaded', loadAwards); 