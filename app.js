const logs = [
    { time: '06/15 21:53', type: 'friend', label: '新的好友', player: '匿名玩家 A', avatar: 'purple', note: '已加入好友列表' },
    { time: '06/15 21:53', type: 'request', label: '发送好友申请', player: '匿名玩家 A', avatar: 'purple', note: '等待对方确认' },
    { time: '06/15 21:51', type: 'friend', label: '新的好友', player: '匿名玩家 B', avatar: 'blue', note: '通过好友申请' },
    { time: '06/15 21:51', type: 'request', label: '发送好友申请', player: '匿名玩家 B', avatar: 'blue', note: '从实例面板发起' },
    { time: '06/15 20:41', type: 'friend', label: '新的好友', player: '匿名玩家 C', avatar: 'green', note: '来源：好友位置' },
    { time: '06/15 06:38', type: 'trust', label: '等级变动', player: '匿名玩家 D', avatar: 'orange', note: 'New User → User' },
    { time: '06/14 19:18', type: 'profile', label: '资料归档', player: '匿名玩家 E', avatar: 'blue', note: '简介 Diff 已更新' },
    { time: '06/14 17:07', type: 'trust', label: '等级变动', player: '匿名玩家 F', avatar: 'orange', note: 'Visitor → Trusted User' },
    { time: '06/14 17:07', type: 'trust', label: '等级变动', player: '匿名玩家 F', avatar: 'orange', note: 'Trusted User → Visitor' },
    { time: '06/14 17:07', type: 'profile', label: '昵称变动', player: '匿名玩家 G', avatar: 'green', note: '旧昵称 → 新昵称' },
    { time: '06/14 11:54', type: 'friend', label: '新的好友', player: '匿名玩家 H', avatar: 'purple', note: '头像 + 名称缓存完成' },
    { time: '06/13 15:42', type: 'friend', label: '新的好友', player: '匿名玩家 I', avatar: 'blue', note: '自动补全显示名' },
    { time: '06/13 07:32', type: 'trust', label: '等级变动', player: '匿名玩家 J', avatar: 'green', note: 'User → Known User' },
    { time: '06/12 15:30', type: 'vr', label: 'VR 通知', player: '匿名玩家 K', avatar: 'orange', note: '正在前往实例' },
    { time: '06/12 14:58', type: 'vr', label: 'VR 叠加', player: '匿名玩家 L', avatar: 'purple', note: '手背卡片已刷新' },
    { time: '06/12 12:10', type: 'profile', label: '归档 Diff', player: '匿名玩家 M', avatar: 'blue', note: '与上次归档对比' },
    { time: '06/11 23:43', type: 'request', label: '发送好友申请', player: '匿名玩家 N', avatar: 'green', note: '陌生人请求流程' },
    { time: '06/11 20:16', type: 'vr', label: '打开实例', player: '匿名玩家 O', avatar: 'orange', note: '桌面模式自动跟随' }
];

const friends = [
    { name: '匿名好友 A', world: 'GIGAS -OLYMPUS- · 好友+', color: 'purple', state: 'online' },
    { name: '匿名好友 B', world: 'YH MMD WORLD Vol.1 · 仅限好友', color: 'blue', state: 'online' },
    { name: '匿名好友 C', world: 'Miku EXPO Live · 好友+', color: 'green', state: 'away' },
    { name: '匿名好友 D', world: 'Coze Isle · 好友+', color: 'orange', state: 'away' },
    { name: '匿名好友 E', world: 'PyPyDance · 好友+', color: 'purple', state: 'online', green: true },
    { name: '匿名好友 F', world: '台北纯K(装修中) · 好友+', color: 'blue', state: 'away', green: true },
    { name: '匿名好友 G', world: 'GIGAS -OLYMPUS- · 好友+', color: 'green', state: 'online' },
    { name: '匿名好友 H', world: '咖啡厅 · 公开', color: 'orange', state: 'online', green: true },
    { name: '匿名好友 I', world: 'TSUKUYOMI · 超公开', color: 'purple', state: 'online', green: true },
    { name: '匿名好友 J', world: 'KASSEN · 好友+', color: 'blue', state: 'away', green: true },
    { name: '匿名好友 K', world: '咖啡厅 · 公开', color: 'orange', state: 'online' }
];

const viewInfo = {
    status: ['好友动态', '展示好友上线、下线、状态和资料相关变化。'],
    location: ['好友位置', '以实例和世界为中心整理好友所在位置。'],
    game: ['游戏日志', '展示游戏启动、关闭、实例进入和退出记录。'],
    rooms: ['房间玩家列表', '按头像和名称显示当前实例内玩家。'],
    search: ['搜索', '快速查找用户、世界、头像和历史记录。'],
    favorite: ['收藏&星标', '管理收藏好友、世界和常用入口。'],
    social: ['好友日志', '交互式预览：筛选、搜索、分页和右侧好友列表都可以点击。'],
    friends: ['好友列表', '头像化展示好友，并保留状态和世界信息。'],
    players: ['玩家管理', '查看玩家资料归档、Diff 和缓存名称。'],
    notice: ['通知', '整理桌面通知、VR 叠加通知和手背卡片。'],
    models: ['我的模型', '管理模型记录和常用模型信息。'],
    charts: ['图表', '以时间线和统计图回顾社交活动。'],
    tools: ['工具', '包含自动跟随、直接打开实例和辅助功能。'],
    dashboard: ['Dashboard', '汇总当前登录、同步和构建状态。'],
    open: ['直接打开', '打开实例、用户、世界和其他 VRChat 链接。'],
    help: ['帮助 & 支持', 'VRCX-Luo 基于 FuLuTang/VRCX-jirai 继续维护；由于直接来源分支长期未更新，所以使用 AI 辅助补充修复和体验改进。'],
    manage: ['管理', '管理账户、设置、更新和本地缓存。'],
    collapse: ['折叠菜单', '移动端会自动改为横向菜单。']
};

let state = {
    filter: 'all',
    query: '',
    page: 1,
    pageSize: 10
};

const table = document.querySelector('#logTable');
const filterSelect = document.querySelector('#typeFilter');
const filterLabel = document.querySelector('#filterLabel');
const searchInput = document.querySelector('#logSearch');
const pageSize = document.querySelector('#pageSize');
const pageNumbers = document.querySelector('#pageNumbers');
const prevPage = document.querySelector('#prevPage');
const nextPage = document.querySelector('#nextPage');
const toast = document.querySelector('#toast');

function badgeClass(type) {
    if (type === 'profile') return 'profile';
    if (type === 'vr') return 'vr';
    return '';
}

function filteredLogs() {
    return logs.filter((item) => {
        const typeMatch = state.filter === 'all' || item.type === state.filter;
        const haystack = `${item.time} ${item.label} ${item.player} ${item.note}`.toLowerCase();
        return typeMatch && haystack.includes(state.query.toLowerCase());
    });
}

function renderLogs() {
    const data = filteredLogs();
    const totalPages = Math.max(1, Math.ceil(data.length / state.pageSize));
    state.page = Math.min(state.page, totalPages);
    const start = (state.page - 1) * state.pageSize;
    const rows = data.slice(start, start + state.pageSize);

    table.innerHTML = rows
        .map(
            (item) => `
                <tr>
                    <td>${item.time}</td>
                    <td><span class="badge ${badgeClass(item.type)}">${item.label}</span></td>
                    <td>
                        <div class="player-cell">
                            <span class="avatar ${item.avatar}"><span>${item.player.slice(-1)}</span><i></i></span>
                            ${item.player}
                        </div>
                    </td>
                    <td>${item.note}</td>
                    <td><button class="action-button" type="button" data-action="${item.player}">⌫</button></td>
                </tr>`
        )
        .join('');

    pageNumbers.innerHTML = Array.from({ length: totalPages }, (_, index) => index + 1)
        .map((page) => `<button class="${page === state.page ? 'active' : ''}" type="button" data-page="${page}">${page}</button>`)
        .join('');
    prevPage.disabled = state.page === 1;
    nextPage.disabled = state.page === totalPages;
}

function renderFriends() {
    const list = document.querySelector('#friendList');
    document.querySelector('#friendCount').textContent = `(15/58)`;
    document.querySelector('#onlineCount').textContent = friends.length;
    list.innerHTML = friends
        .map(
            (friend, index) => `
                <div class="friend-item ${friend.state === 'online' ? 'online' : ''} ${friend.green ? 'green-name' : ''}" data-friend="${friend.name}">
                    <span class="avatar ${friend.color} ${friend.state === 'away' ? 'away' : ''}"><span>${index + 1}</span><i></i></span>
                    <div>
                        <strong>${friend.name}</strong>
                        <p><span class="flag">JP</span>${friend.world}</p>
                    </div>
                </div>`
        )
        .join('');
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function setView(view) {
    const [title, subtitle] = viewInfo[view] || viewInfo.social;
    document.querySelector('#viewTitle').textContent = title;
    document.querySelector('#viewSubtitle').textContent = subtitle;
    document.querySelectorAll('.nav-item, .sub-item').forEach((button) => {
        button.classList.toggle('active', button.dataset.view === view);
    });
    showToast(`已切换到：${title}`);
}

document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
        state.filter = button.dataset.filter;
        filterSelect.value = state.filter;
        filterLabel.textContent = button.textContent === '全部' ? '筛选好友日志' : button.textContent;
        state.page = 1;
        document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('active', item === button));
        renderLogs();
    });
});

filterSelect.addEventListener('change', () => {
    state.filter = filterSelect.value;
    state.page = 1;
    filterLabel.textContent = filterSelect.options[filterSelect.selectedIndex].textContent;
    document.querySelectorAll('[data-filter]').forEach((button) => {
        button.classList.toggle('active', button.dataset.filter === state.filter);
    });
    renderLogs();
});

searchInput.addEventListener('input', () => {
    state.query = searchInput.value.trim();
    state.page = 1;
    renderLogs();
});

pageSize.addEventListener('change', () => {
    state.pageSize = Number(pageSize.value);
    state.page = 1;
    renderLogs();
});

pageNumbers.addEventListener('click', (event) => {
    const page = event.target.closest('[data-page]');
    if (!page) return;
    state.page = Number(page.dataset.page);
    renderLogs();
});

prevPage.addEventListener('click', () => {
    state.page = Math.max(1, state.page - 1);
    renderLogs();
});

nextPage.addEventListener('click', () => {
    state.page += 1;
    renderLogs();
});

table.addEventListener('click', (event) => {
    const row = event.target.closest('tr');
    if (!row) return;
    table.querySelectorAll('tr').forEach((item) => item.classList.remove('selected'));
    row.classList.add('selected');
    const action = event.target.closest('[data-action]');
    showToast(action ? `已模拟删除：${action.dataset.action}` : '已选中日志行');
});

document.querySelector('#friendList').addEventListener('click', (event) => {
    const item = event.target.closest('.friend-item');
    if (!item) return;
    document.querySelectorAll('.friend-item').forEach((friend) => friend.classList.remove('selected'));
    item.classList.add('selected');
    showToast(`已选中 ${item.dataset.friend}`);
});

document.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => setView(button.dataset.view));
});

document.querySelectorAll('[data-friend-tab]').forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('[data-friend-tab]').forEach((item) => item.classList.toggle('active', item === button));
        showToast(button.dataset.friendTab === 'online' ? '显示好友列表' : '追踪非好友暂无数据');
    });
});

document.querySelectorAll('[data-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
        button.textContent = button.textContent.startsWith('⌄') ? button.textContent.replace('⌄', '›') : button.textContent.replace('›', '⌄');
        showToast('已模拟折叠分组');
    });
});

document.querySelector('#focusSearch').addEventListener('click', () => {
    searchInput.focus();
    showToast('搜索框已聚焦');
});

document.querySelector('#refreshButton').addEventListener('click', () => {
    renderLogs();
    showToast('已刷新演示数据');
});

document.querySelector('#notifyButton').addEventListener('click', () => showToast('VR 通知：正在前往实例'));
document.querySelector('#settingsButton').addEventListener('click', () => showToast('设置面板为演示交互'));

document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchInput.focus();
    }
});

renderLogs();
renderFriends();
