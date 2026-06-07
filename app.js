/* ==========================================================================
   SMARTHOME REVIEW - PUBLIC FRONTEND MOTOR (ES6+)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // ==========================================================================
    // INITIAL MOCK DATA (Fallback when database file is not populated yet)
    // ==========================================================================
    const mockPosts = [
        {
            id: "post_1",
            title: "Review Chi Tiết: Robot Hút Bụi Ecovacs Deebot T10 - Đáng Tiền Hay Chỉ Là Quảng Cáo?",
            summary: "Đánh giá chi tiết Robot hút bụi Ecovacs Deebot T10 với công nghệ tránh vật cản camera AI 3.0, lực hút mạnh mẽ và thời lượng pin lớn. Liệu đây có phải là quản gia làm sạch lý tưởng cho ngôi nhà bạn?",
            content: `## Giới thiệu tổng quan về Ecovacs Deebot T10
Robot hút bụi lau nhà **Ecovacs Deebot T10** là một trong những sản phẩm chủ lực của nhà Ecovacs, hướng tới phân khúc cận cao cấp. Được trang bị các công nghệ tiệm cận dòng cao cấp nhất, chiếc robot này hứa hẹn mang lại trải nghiệm dọn dẹp hoàn toàn rảnh tay cho gia chủ.

## Những tính năng nổi bật đáng chú ý
*   **Tránh vật cản bằng Camera AI (AIVI 3.0)**: Khả năng nhận diện vật cản như dây điện, tất, dép và đồ chơi trẻ em rất tốt, hạn chế tối đa việc robot bị mắc kẹt.
*   **Hệ thống lập bản đồ dải TrueMapping 2.0**: Quét không gian nhà 3D nhanh chóng, vẽ bản đồ chính xác kể cả môi trường thiếu sáng.
*   **Lực hút 3000Pa mạnh mẽ**: Hút sạch bụi bẩn ở các khe sàn gỗ và trên thảm một cách hiệu quả.
*   **Hệ thống lau rung OZMO Pro 3.0**: Tần số rung lên tới 600 lần/phút giúp đánh bay các vết bẩn khô cứng bám trên mặt sàn gỗ và gạch men.

## Đánh giá Ưu và Nhược điểm

### Ưu điểm
*   Thiết kế màu trắng sang trọng, tinh tế.
*   Tránh vật cản thông minh nhờ camera AI, không đâm húc mạnh vào đồ nội thất.
*   Thời gian pin sử dụng bền bỉ cho căn hộ diện tích rộng (trên 120m2).
*   Trợ lý giọng nói YIKO phản hồi nhanh nhạy.

### Nhược điểm
*   Khay chứa nước trên robot hơi nhỏ nếu lau ở chế độ nước nhiều.
*   Màu trắng dễ bám bụi bẩn trên thân máy sau thời gian dài sử dụng.

## Đối tượng phù hợp sử dụng
Thiết bị cực kỳ phù hợp cho các căn hộ chung cư hiện đại, nhà phố có ít tầng, hoặc các gia đình bận rộn có nuôi thú cưng cần lau dọn lông rụng hàng ngày.`,
            category: "robot",
            categoryLabel: "Robot Hút Bụi",
            image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&auto=format&fit=crop&q=80",
            date: "2026-06-05T08:00:00Z",
            author: "KTS Minh Trí",
            productName: "Ecovacs Deebot T10",
            productPrice: "8.500.000 ₫",
            affiliateLink: "https://shope.ee/m/demo-aff"
        },
        {
            id: "post_2",
            title: "Khóa Vân Tay Thông Minh Kaadas K9 - Giải Pháp An Ninh Hoàn Hảo Cho Cửa Đại Sảnh",
            summary: "Đánh giá chi tiết khóa cửa thông minh kéo đẩy Kaadas K9 thương hiệu Đức. Tích hợp đa dạng phương thức mở khóa, cảm biến vân tay cực nhạy và độ bền bỉ cơ học vượt trội.",
            content: `## Khóa cửa thông minh Kaadas K9 có gì đặc biệt?
**Kaadas K9** là dòng khóa cửa vân tay cao cấp với thiết kế kéo - đẩy (Push-Pull) hiện đại, tiện lợi. Dòng khóa này được chế tạo từ hợp kim kẽm siêu bền và bề mặt kính cường lực chống xước va đập tốt, mang lại sự sang trọng ngay từ cửa vào nhà.

## Các tính năng bảo mật hàng đầu
*   **Công nghệ vân tay FPC Thụy Điển**: Nhận diện vân tay dựa trên 3 cảm biến: điện dung, nhiệt độ và áp suất, ngăn ngừa hoàn toàn vân tay giả và nhận diện cực nhanh dưới 0.5s.
*   **Đa dạng cách thức mở khóa**: Vân tay, mật mã, thẻ từ, chìa cơ và kết nối Bluetooth qua điện thoại.
*   **Chức năng mật mã ảo**: Cho phép nhập thêm số ngẫu nhiên trước và sau mật mã chính để tránh bị nhìn trộm.
*   **Cảnh báo đột nhập**: Báo động âm thanh lớn khi có hiện tượng cạy khóa hoặc nhập sai vân tay quá 5 lần.

## Đánh giá Ưu và Nhược điểm

### Ưu điểm
*   Thiết kế kéo đẩy sang trọng, dễ mở cửa khi đang mang xách nhiều đồ.
*   Cảm biến vân tay siêu nhạy tích hợp ngay trên tay cầm.
*   Thân khóa bằng inox 304 chống rỉ sét chốt đa điểm cực kỳ chắc chắn.

### Nhược điểm
*   Giá thành lắp đặt trọn gói ở mức khá cao so với các thương hiệu nội địa.
*   Kích thước khóa lớn, yêu cầu đố cửa rộng tối thiểu 11cm.

## Đối tượng phù hợp sử dụng
Khóa cực kỳ thích hợp lắp đặt cho cửa chính của căn hộ chung cư cao cấp, biệt thự đơn lập và nhà phố cần nâng cấp tính bảo mật và sự tiện lợi.`,
            category: "security",
            categoryLabel: "An Ninh & Khóa",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
            date: "2026-06-03T10:15:00Z",
            author: "KTS Minh Trí",
            productName: "Kaadas K9 Smart Lock",
            productPrice: "6.200.000 ₫",
            affiliateLink: "https://shope.ee/m/demo-aff"
        },
        {
            id: "post_3",
            title: "Đánh Giá Nồi Chiên Không Dầu Philips HD9270/90 XL - Dung Tích Lớn Cho Cả Gia Đình",
            summary: "Trải nghiệm thực tế nồi chiên không dầu Philips HD9270/90 XL dòng Essential Airfryer. Công nghệ Rapid Air độc quyền giúp đồ ăn chín đều giòn rụm mà không cần dầu mỡ.",
            content: `## Giới thiệu về Philips HD9270/90 XL
Nồi chiên không dầu **Philips HD9270/90 XL** là dòng nồi chiên điện tử cao cấp sở hữu dung tích lớn (khoảng 6.2 lít), phục vụ tốt cho các gia đình đông người từ 4-6 thành viên. Nhờ công nghệ làm nóng tiên tiến, chiếc nồi giúp giảm tới 90% lượng chất béo trong thực phẩm.

## Điểm nhấn công nghệ nổi bật
*   **Công nghệ Rapid Air độc quyền**: Thiết kế đáy hình sao đặc biệt giúp luồng khí nóng luân chuyển tuần hoàn cực nhanh, làm chín thực phẩm đều từ trong ra ngoài mà không cần lật trở nhiều.
*   **Màn hình cảm ứng hiện đại**: Tích hợp sẵn 7 chương trình nấu ăn tự động được cài đặt sẵn nhiệt độ và thời gian (khoai tây chiên, đùi gà, thịt, cá...).
*   **Dễ dàng vệ sinh**: Rổ chiên phủ lớp chống dính QuickClean tháo rời tiện lợi, rửa sạch được trong máy rửa bát.

## Đánh giá Ưu và Nhược điểm

### Ưu điểm
*   Khả năng chiên nướng đều, thực phẩm không bị khô bên trong.
*   Dung tích lòng nồi lớn có thể chiên nguyên một con gà dưới 1.5kg.
*   Độ bền của lớp chống dính lòng nồi cực tốt, không bị bong tróc sau thời gian dài sử dụng.

### Nhược điểm
*   Kích thước nồi hơi cồng kềnh, chiếm nhiều diện tích trên bàn bếp.
*   Công suất lớn (2000W) nên cần nguồn điện ổn định.

## Đối tượng phù hợp sử dụng
Dành cho các bà nội trợ, gia đình yêu thích ăn đồ chiên nướng lành mạnh cho sức khỏe, mong muốn tiết kiệm thời gian chuẩn bị bữa ăn hàng ngày.`,
            category: "kitchen",
            categoryLabel: "Thiết Bị Bếp",
            image: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?w=800&auto=format&fit=crop&q=80",
            date: "2026-05-28T15:30:00Z",
            author: "KTS Minh Trí",
            productName: "Philips HD9270/90 XL",
            productPrice: "3.450.000 ₫",
            affiliateLink: "https://shope.ee/m/demo-aff"
        }
    ];

    let allPosts = [];

    // ==========================================================================
    // THEME CONTROLLER (LIGHT/DARK)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // Check localstorage theme
    const savedTheme = localStorage.getItem('sh_theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i data-lucide="sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i data-lucide="moon"></i>';
    }
    lucide.createIcons();

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('sh_theme', isLight ? 'light' : 'dark');
        themeToggleBtn.innerHTML = isLight ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
        lucide.createIcons();
    });

    // ==========================================================================
    // ARTICLE PARSER (Convert basic Markdown to clean HTML)
    // ==========================================================================
    function parseMarkdown(mdText) {
        if (!mdText) return '';
        
        let html = mdText;
        
        // Headers
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        
        // Bold
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // List items
        html = html.replace(/^\*\s*(.*)/gim, '<li>$1</li>');
        html = html.replace(/^\-\s*(.*)/gim, '<li>$1</li>');
        
        // Wrap lists (very simple, wraps contiguous li tags)
        html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
        
        // Linebreaks to paragraphs
        // Split by double line breaks and wrap in p if not a list or header
        const lines = html.split(/\n\n/);
        const processedLines = lines.map(line => {
            const trimmed = line.trim();
            if (!trimmed) return '';
            if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<li')) {
                return trimmed;
            }
            return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
        });
        
        return processedLines.join('');
    }

    // ==========================================================================
    // DATA FETCH PIPELINE
    // ==========================================================================
    async function loadArticles() {
        // 1. Check if loaded via local posts.js script tag (bypasses CORS file:// security)
        if (window.nichePosts && window.nichePosts.length > 0) {
            allPosts = window.nichePosts;
            renderNicheSite('all');
            return;
        }

        // 2. Fallback to fetch posts.json
        try {
            // Attempt to fetch from JSON database
            const response = await fetch('data/posts.json');
            if (response.ok) {
                allPosts = await response.json();
            } else {
                // Fallback to mock data if file not found
                allPosts = mockPosts;
            }
        } catch (error) {
            console.warn("Could not load posts.json database. Using fallback mock data.", error);
            allPosts = mockPosts;
        }

        renderNicheSite('all');
    }

    // ==========================================================================
    // RENDER CONTROLLER
    // ==========================================================================
    function renderNicheSite(filterCategory = 'all') {
        const featuredContainer = document.getElementById('featured-post-container');
        const gridContainer = document.getElementById('reviews-grid');

        // Filter posts
        const filteredPosts = allPosts.filter(post => filterCategory === 'all' || post.category === filterCategory);

        if (filteredPosts.length === 0) {
            featuredContainer.innerHTML = '';
            gridContainer.innerHTML = `
                <div class="table-empty" style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-secondary);">
                    <i data-lucide="file-warning" style="width:48px;height:48px;margin-bottom:12px;color:var(--text-muted);"></i>
                    <p>Chưa có bài đánh giá nào cho danh mục này.</p>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        // Render Featured Post (Only on 'all' filter, or display the first item of category as featured)
        const featuredPost = filteredPosts[0];
        const displayDate = new Date(featuredPost.date).toLocaleDateString('vi-VN');

        featuredContainer.innerHTML = `
            <div class="featured-card glass-card">
                <div class="featured-img-container">
                    <img src="${featuredPost.image}" alt="${featuredPost.title}">
                </div>
                <div class="featured-info">
                    <span class="badge ${featuredPost.category}">${featuredPost.categoryLabel}</span>
                    <h3 class="open-post-trigger" data-id="${featuredPost.id}">${featuredPost.title}</h3>
                    <p>${featuredPost.summary}</p>
                    <div class="card-footer">
                        <div class="meta-row">
                            <span class="meta-item"><i data-lucide="calendar" style="width:14px;"></i> ${displayDate}</span>
                            <span class="meta-item"><i data-lucide="user" style="width:14px;"></i> ${featuredPost.author}</span>
                        </div>
                        <button class="cta-btn btn-sm open-post-trigger" data-id="${featuredPost.id}" style="padding:10px 20px;font-size:13px;border-radius:8px;">
                            Xem Chi Tiết <i data-lucide="arrow-right" style="width:14px;"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Render Remaining Grid Posts
        gridContainer.innerHTML = '';
        const gridPosts = filteredPosts.slice(1); // Exclude the featured one

        if (gridPosts.length === 0 && filteredPosts.length > 1) {
            // Fallback just in case
        }

        gridPosts.forEach(post => {
            const cardDate = new Date(post.date).toLocaleDateString('vi-VN');
            const card = document.createElement('article');
            card.className = 'review-card glass-card';
            
            card.innerHTML = `
                <div class="card-img-container">
                    <img src="${post.image}" alt="${post.title}">
                    <span class="badge ${post.category}" style="position:absolute;top:16px;left:16px;margin:0;">${post.categoryLabel}</span>
                </div>
                <div class="card-content">
                    <h3 class="open-post-trigger" data-id="${post.id}">${post.title}</h3>
                    <p>${post.summary}</p>
                    <div class="card-footer">
                        <div class="meta-row">
                            <span class="meta-item"><i data-lucide="calendar" style="width:14px;"></i> ${cardDate}</span>
                        </div>
                        <button class="theme-btn open-post-trigger" data-id="${post.id}" title="Xem chi tiết" style="width:36px;height:36px;">
                            <i data-lucide="arrow-right"></i>
                        </button>
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });

        lucide.createIcons();
        setupClickTriggers();
    }

    // ==========================================================================
    // ARTICLE MODAL DISPLAY & INTERACTION
    // ==========================================================================
    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('modal-article-body');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalCloseOverlay = document.getElementById('modal-close-overlay');

    function openArticle(postId) {
        const post = allPosts.find(p => p.id === postId);
        if (!post) return;

        const dateStr = new Date(post.date).toLocaleDateString('vi-VN');
        const parsedHtmlContent = parseMarkdown(post.content);

        modalBody.innerHTML = `
            <div class="modal-article-header">
                <span class="badge ${post.category}">${post.categoryLabel}</span>
                <h1>${post.title}</h1>
                <div class="meta-row">
                    <span class="meta-item"><i data-lucide="calendar" style="width:16px;"></i> Ngày đăng: ${dateStr}</span>
                    <span class="meta-item"><i data-lucide="user" style="width:16px;"></i> Người viết: ${post.author}</span>
                </div>
            </div>
            
            <img src="${post.image}" alt="${post.title}" class="article-hero-img">
            
            <div class="article-rich-text">
                ${parsedHtmlContent}
            </div>
            
            <!-- CTA Affiliate block -->
            <div class="cta-box">
                <h4>Sở Hữu ${post.productName} Ngay Hôm Nay</h4>
                <p style="color:var(--text-secondary);font-size:14px;margin-bottom:20px;">Giá tham khảo: <strong style="color:var(--accent-cyan);font-size:18px;">${post.productPrice}</strong></p>
                <a href="${post.affiliateLink}" target="_blank" rel="noopener noreferrer" class="cta-btn">
                    <i data-lucide="shopping-cart"></i> Ghé Cửa Hàng Shopee / Lazada <i data-lucide="external-link" style="width:16px;"></i>
                </a>
                <p style="color:var(--text-muted);font-size:11px;margin-top:12px;"><i data-lucide="shield-check" style="width:12px;display:inline-block;vertical-align:middle;"></i> Liên kết tiếp thị an toàn, được cung cấp chính hãng bởi đại lý.</p>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop scrolling behind modal
        lucide.createIcons();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalCloseOverlay.addEventListener('click', closeModal);
    
    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function setupClickTriggers() {
        document.querySelectorAll('.open-post-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const id = trigger.getAttribute('data-id');
                openArticle(id);
            });
        });
    }

    // ==========================================================================
    // FILTER CONTROLLER (NAV NAVIGATION)
    // ==========================================================================
    const filterLinks = document.querySelectorAll('.nav-links a');
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const category = link.getAttribute('data-filter');
            renderNicheSite(category);
        });
    });

    // ==========================================================================
    // INITIALIZATION PIPELINE
    // ==========================================================================
    loadArticles();
});
