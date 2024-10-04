//TODO tag操作
window.onload = function () {
    const addButton = document.getElementById('addButton');
    const tagList = document.getElementById('tagList');
    const tags = document.querySelectorAll('.tag');
    let selectedTags = 0;

    // 为加号按钮添加点击事件
    addButton.addEventListener('click', function () {
        if (selectedTags < 3) {
            const newTag = document.createElement('div');
            newTag.className = 'tag';
            newTag.contentEditable = true;
            newTag.textContent = 'New Tag';

            const li = tagList.children[0];
            li.insertBefore(newTag, addButton);

            // 新添加的tag也要绑定点击事件
            newTag.addEventListener('click', handleTagClick);
            
            //处理新添加的tag失去焦点时的情况
            let initialValue = 'New Tag';
            newTag.innerText = "";
            newTag.focus();

            //失去焦点
            newTag.addEventListener('blur', function () {
                if (newTag.textContent === "") {
                    newTag.textContent = initialValue;
                }
            });


            newTag.addEventListener('keydown', function (event) {
                if (event.key === "Enter") {
                    //阻止默认行为
                    event.preventDefault();
                    newTag.blur();
                }
            });

        }
    });

    // 为初始的tag绑定点击事件
    tags.forEach(tag => {
        tag.addEventListener('click', handleTagClick);
    });

    function handleTagClick() {
         this.classList.toggle('active');
        if (this.classList.contains('active')) {
            if(selectedTags < 3){
                selectedTags++;
            }else{
                this.classList.remove('active');
            }
        }else{
            selectedTags--;
        }
    }
};


const postData = [
    "在当今这个信息爆炸的时代，人们每天都被海量的信息所包围。从社交媒体上的各种动态更新，到新闻网站上不断涌现的时政、娱乐、科技等各类新闻，我们的大脑仿佛在一个永不停歇的信息漩涡中。这些信息有的是有价值的知识，有的却仅仅是碎片化的、未经证实的传闻。如何在这海量的信息中筛选出真正对自己有用的内容，成为了现代人面临的一个重要挑战。",
    "教育是一个国家发展的基石，它对于个人的成长和社会的进步都有着不可替代的作用。优质的教育能够为个人提供广阔的发展空间，使人们具备知识、技能和思维能力，从而更好地适应社会的需求。从基础教育阶段的启蒙教育，到高等教育阶段的专业知识学习，每一个阶段都在塑造着一个人的品格和能力。然而，不同地区、不同阶层的教育资源分配并不均衡，这也导致了教育机会的不平等，需要社会各界共同努力来改善这种状况。",
    "科技的发展日新月异，它已经渗透到了我们生活的方方面面。从智能手机的普及，让我们可以随时随地与世界相连，到人工智能技术在医疗、金融、交通等领域的应用，科技正在改变着我们的生活方式和社会运行模式。但科技发展也带来了一些问题，比如数据隐私的保护、人工智能对就业结构的冲击等。如何在享受科技带来的便利的同时，解决这些潜在的问题，是我们需要深入思考的。",
    "文化是一个民族的灵魂，它承载着一个民族的历史、价值观和信仰。世界上各个民族都有着独特而丰富的文化遗产，这些文化遗产以不同的形式存在，如传统的艺术形式（音乐、舞蹈、绘画等）、民间传说、古老的建筑等。保护和传承文化遗产是我们每一个人的责任，因为它们不仅是一个民族的瑰宝，也是全人类的共同财富。同时，不同文化之间的交流与融合也在不断发生，这有助于促进文化的创新和发展。",
    "环境保护已经成为全球面临的紧迫任务。随着工业化和城市化的快速发展，我们的地球面临着诸多环境问题，如气候变化、空气污染、水资源污染和短缺、生物多样性减少等。这些问题不仅威胁着人类的生存环境，也影响着其他生物的生存。每个人都应该意识到自己在环境保护中的责任，从日常生活中的小事做起，如减少使用一次性塑料制品、节约能源、绿色出行等，同时政府和企业也需要采取更积极的措施来应对环境挑战。",
    "健康是人们追求幸福生活的基础。在现代社会，虽然医疗技术不断进步，但人们面临的健康问题却依然复杂多样。除了传统的疾病防治，心理健康也越来越受到人们的关注。长期的工作压力、生活节奏的加快以及社会关系的复杂变化，都可能导致人们出现心理问题，如焦虑、抑郁等。保持健康的生活方式，包括合理的饮食、适量的运动、充足的睡眠以及积极的心理调节，对于维护个人健康至关重要。",
    "艺术具有强大的感染力和表现力，它能够以独特的方式触动人们的心灵。无论是绘画中色彩与线条的组合所传达的情感，还是音乐中旋律与节奏的交融所营造的氛围，都能让人们产生深刻的情感共鸣。艺术也是一种反映社会现实的方式，许多伟大的艺术作品都蕴含着对社会现象的思考和批判。同时，艺术的创作过程也是艺术家自我表达和探索内心世界的过程，它为人类的精神世界增添了无限的丰富性。",
    "旅游是一种非常受欢迎的活动，它让人们有机会走出自己熟悉的环境，去体验不同的文化、风景和生活方式。在旅游的过程中，人们可以拓宽自己的视野，增长见识，结交新朋友。不同的旅游目的地有着各自独特的魅力，从古老的历史遗迹到壮丽的自然景观，从繁华的都市到宁静的乡村。然而，旅游也可能带来一些负面影响，如对当地环境的破坏、对传统文化的过度商业化等，因此，可持续旅游的理念逐渐受到重视。",
    "社会公平是构建和谐社会的重要基础。在社会的各个领域，包括就业、教育、医疗等，都应该保障公平的机会。然而，在现实生活中，仍然存在着各种形式的不公平现象。例如，性别歧视在某些行业仍然存在，一些弱势群体在获取资源和机会方面面临着更大的困难。要实现社会公平，需要建立健全的法律法规，同时也需要提高社会成员的公平意识，从观念上和制度上共同努力来消除不公平现象。",
    "美食是一种独特的文化现象，它反映了一个地区的地理环境、物产资源、历史文化和人民的生活习惯。世界各地的美食种类繁多，各具特色。从中国的八大菜系，每一道菜都蕴含着深厚的文化底蕴和精湛的烹饪技艺，到法国的精致料理，注重食材的品质和烹饪的艺术感，美食不仅满足了人们的味蕾，也是文化交流的重要载体。美食文化的传承和创新也是值得关注的话题，随着时代的发展，传统美食也在不断地融合新的元素。",
    "体育运动对于个人和社会都有着诸多的积极意义。对于个人来说，它可以增强身体素质，提高免疫力，培养毅力和团队合作精神。无论是竞技体育中的运动员们为了荣誉而拼搏，还是大众体育中的人们为了健康而锻炼，体育运动都在人们的生活中扮演着重要的角色。从社会层面来看，体育运动可以促进社区的凝聚力，激发民族自豪感，同时也是一种促进国际交流与合作的方式，例如奥运会等大型体育赛事。",
    "阅读是一种丰富人类精神世界的活动。通过阅读书籍、文章等各种文本，人们可以获取知识、拓宽视野、启迪智慧。不同类型的阅读材料，如文学作品、科学著作、历史典籍等，都有着不同的价值。文学作品可以让读者感受到人性的复杂和美好，科学著作能够传递最新的科研成果和知识，历史典籍则记录着人类社会的发展历程。培养阅读习惯对于个人的成长和社会的文明进步都有着深远的意义。",
    "在全球化的时代，国际合作变得越来越重要。各国在政治、经济、文化等各个领域都有着广泛的合作需求。在政治方面，各国通过外交手段协商解决国际争端，共同维护世界和平与稳定。在经济上，国际贸易和投资促进了资源的优化配置和全球经济的发展。文化交流则有助于增进不同国家和民族之间的相互了解和友谊。然而，全球化也面临着一些挑战，如贸易保护主义的抬头、文化冲突等，需要各国共同努力来应对。"
]

const ul = document.querySelector('.content ul');

const data = [];

const register = document.querySelector('.register');
const login = document.querySelector('.login');
const avatar = document.querySelector('.avatar');
const popup = document.getElementById('myPopup');
// 发送按钮
const enter = document.querySelector('#enter');
//插入数据
enter.addEventListener('click', function () {
    const random = Math.floor(Math.random() * postData.length);
    data.push({
        "title": "主题信息",
        "tag": gatherTag(),
        "date": formatDate(new Date),
        "content": contentHandle(postData[random]),
        "like": getRandomNumber(),
        "post": getRandomNumber(),
        "view": getRandomNumber()
    })
    //data数据调试
    console.log(data);
})
//添加数据
let i = 0;
enter.addEventListener('click', function () {
    // alert('已发送');
    const li = document.createElement('li');
    const color_tmp = Math.floor(Math.random() * 16777215).toString(16);
    // 修复random颜色可能会随机5位导致非法
    const random_color = color_tmp.length == 6 ? color_tmp : '0' + color_tmp;

    let str = "";
    const tags = gatherTag();
    for (let i = 0; i < tags.length; i++) {
        str += '<span class="tagR">' + tags[i] + '</span>';
    }

    li.innerHTML = `
            <div class="liContainer">
                    
                    <div class="one">
                        <a href="javascript:void(0)"><img src="../img/defaultIcon.png" alt="" width="45px" height="45px"></a>
                    </div>
                    <div class="two">
                        <a href="#"><h3>${data[i].title}</h3></a>` + str +
                                                                                `<span>${data[i].date}</span>
                    </div>
                    <div class="three">
                    <div class="three_content">${data[i].like}赞同</div>
                    <div class="three_content">${data[i].post}帖子</div>
                    <div class="three_content">${data[i].view}浏览</div>
                    <div class="pre_content" style="border-left: 5px solid #${random_color};">${data[i].content}</div>
                </div>
                </div>
                
                
                `
    ul.appendChild(li);
    i++; //每次添加完数据后，i加1
})

//对标准日期进行处理, 格式年-月-日 时:分:秒
function formatDate(date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(- 2);
    const day = ('0' + date.getDate()).slice(- 2);
    const hours = ('0' + date.getHours()).slice(- 2);
    const minutes = ('0' + date.getMinutes()).slice(- 2);
    const seconds = ('0' + date.getSeconds()).slice(- 2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
//随机产生like数, 1-999
function getRandomNumber() {
    return Math.floor(Math.random() * 999) + 1;
}
//对content进行显示处理
function contentHandle(content) {
    if (content.length > 9) {
        return content.slice(0, 9) + '...';
    } else {
        return content;
    }
}


//收集tag
function gatherTag() {
    const tmp_arr = [];
    const tags = document.querySelectorAll('.tag.active');
    console.log(tags);
    tags.forEach(tag => tmp_arr.push(tag.innerText))
    //tmp_arr存储tag们的内容
    return tmp_arr;
}



// 点击登录后两按钮消失, 登录成功显示头像框

register.addEventListener('click', function () {

})

login.addEventListener('click', function () {
    const state = true;
    if (state) {
        register.style.display = 'none';
        login.style.display = 'none';
        avatar.style.display = 'block';
    }
})
avatar.addEventListener('click', function () {
    popup.classList.toggle('show');
})

// const inline_btn = document.querySelector('.inline_btn');
// 点击除按钮外的空白会使弹窗消失
window.addEventListener('click', function (event) {
    if (!event.target.matches('.avatar')) {
        // 仅去除class
        popup.classList.remove('show');
    }
})


const details = document.getElementsByClassName('details1');
details.addEventListener('click', function () {
    details.preventDefault;
})