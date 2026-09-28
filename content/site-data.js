/* =====================================================================
   NỘI DUNG WEBSITE – FILE DUY NHẤT CẦN SỬA KHI CẬP NHẬT THÔNG TIN
   ---------------------------------------------------------------------
   Quy tắc:
   • Mỗi đoạn chữ có 2 phiên bản:  { vi: "Tiếng Việt", en: "English" }
     Nếu 2 ngôn ngữ giống nhau (tên riêng, email…), ghi 1 chuỗi: "IEC English Center"
   • Định dạng nhanh trong chữ:
       **chữ đậm**      ==tô sáng kiểu bút dạ==      [[chữ màu thương hiệu]]
   • Mỗi mục trong danh sách [ ... ] ngăn cách bằng dấu phẩy.
   • Luôn đặt chữ trong dấu nháy kép "…". Nếu trong chữ có dấu " thì dùng “ ” thay thế.
   • Sửa xong: mở index.html kiểm tra. Nếu trang báo "Không tải được nội dung"
     => thường do thiếu dấu phẩy hoặc dấu nháy trong file này.
   CHỈ ĐƯA LÊN THÔNG TIN ĐÃ KIỂM CHỨNG (có bằng cấp / hợp đồng / sự đồng ý).
   ===================================================================== */

window.SITE_DATA = {

  /* ---------- Thông tin chung ---------- */
  meta: {
    title: {
      vi: "English with Ms. Annie · Nguyễn Thị Kim Anh – Giáo viên Tiếng Anh tại Đà Nẵng",
      en: "English with Ms. Annie · Nguyen Thi Kim Anh – English Teacher in Da Nang"
    },
    description: {
      vi: "Giáo viên Tiếng Anh tại Đà Nẵng. Cử nhân Ngôn ngữ Anh (ĐH Duy Tân), chứng chỉ TESOL 120 giờ, học viên Thạc sĩ Lý luận & Phương pháp dạy học Tiếng Anh.",
      en: "English teacher in Da Nang. B.A. in English Linguistics (Duy Tan University), 120-hour TESOL certificate, currently pursuing a Master's in English Language Teaching Methodology."
    }
  },

  profile: {
    // Thương hiệu (logo, tab trình duyệt, chân trang) – giữ nguyên ở cả 2 ngôn ngữ
    brand: {
      full:     "English with Ms. Annie",
      tagline:  "English with",
      name:     "Ms. Annie",
      monogram: "A"
    },
    name:     { vi: "Nguyễn Thị Kim Anh", en: "Nguyen Thi Kim Anh" },
    alias:    "Ms. Annie",          // dòng phụ dưới họ tên ở phần đầu trang – để "" nếu muốn ẩn
    role:     { vi: "Giáo viên Tiếng Anh", en: "English Teacher" },
    location: { vi: "Đà Nẵng", en: "Da Nang" },
    photo:    "assets/avatar.jpg",
    photoAlt: { vi: "Chân dung giáo viên Nguyễn Thị Kim Anh", en: "Portrait of teacher Nguyen Thi Kim Anh" },
    badge:    { vi: "Đang giảng dạy tại IEC English Center", en: "Currently teaching at IEC English Center" },
    email:    "anhnguyenkh099@gmail.com",
    phone:    "0986777175",
    phoneDisplay: "0986 777 175"
  },

  /* ---------- Phần đầu trang ---------- */
  hero: {
    headline: {
      vi: "Giúp học viên ==giao tiếp tự tin== và ==tiến bộ bền vững== trong những lớp học lấy người học làm trung tâm.",
      en: "Helping learners ==communicate with confidence== and ==make lasting progress== in student-centered classrooms."
    },
    // Câu trích dẫn nhỏ dưới tiêu đề – để "" nếu muốn ẩn ở ngôn ngữ đó
    quote: {
      vi: "“Committed to developing learners’ communication skills, confidence, and long-term progress.”",
      en: ""
    }
  },

  /* ---------- Dải điểm nổi bật (4 ô) ---------- */
  stats: [
    { label: { vi: "Chứng chỉ giảng dạy", en: "Teaching certificate" },
      value: { vi: "TESOL [[120h]]", en: "TESOL [[120h]]" } },
    { label: { vi: "Môi trường giảng dạy", en: "Teaching settings" },
      value: { vi: "[[03]] trung tâm Anh ngữ", en: "[[3]] English centers" } },
    { label: { vi: "Cử nhân NN Anh · loại Giỏi", en: "B.A. English Linguistics · Very Good" },
      value: "GPA [[3.2]]/4.0" },
    { label: { vi: "Đang theo học", en: "Currently pursuing" },
      value: { vi: "Thạc sĩ [[ELT]]", en: "Master's in [[ELT]]" } }
  ],

  /* ---------- Về tôi ---------- */
  about: {
    eyebrow: { vi: "Về tôi", en: "About me" },
    title:   { vi: "Học tiếng Anh bằng cách [[sử dụng]] tiếng Anh", en: "Learn English by [[using]] English" },
    paragraphs: [
      {
        vi: "Tôi là giáo viên Tiếng Anh tại Đà Nẵng, có kinh nghiệm đồng hành cùng **học viên nhỏ tuổi** trong các lớp học lấy người học làm trung tâm. Mỗi bài học được thiết kế sinh động với vận động phản xạ toàn thân (TPR), bài hát, trò chơi, nhập vai và học liệu số.",
        en: "I am an English teacher based in Da Nang with experience supporting **young learners** in student-centered classrooms. Every lesson is designed to be engaging, using Total Physical Response (TPR), songs, games, role-play, and digital resources."
      },
      {
        vi: "Song song với giảng dạy, tôi đang theo học chương trình **Thạc sĩ Lý luận và Phương pháp dạy học bộ môn Tiếng Anh** tại Trường Đại học Ngoại ngữ – Đại học Đà Nẵng, để không ngừng cập nhật phương pháp và nâng cao chất lượng lớp học.",
        en: "Alongside teaching, I am pursuing a **Master's degree in English Language Teaching Methodology** at the University of Foreign Language Studies – The University of Danang, to keep refining my methods and the quality of every class."
      },
      {
        vi: "Mục tiêu của tôi rất rõ ràng: giúp mỗi học viên giao tiếp tốt hơn, tự tin hơn và tiến bộ đều đặn, lâu dài – không chỉ qua một kỳ kiểm tra.",
        en: "My goal is simple: help every learner communicate better, speak with more confidence, and make steady, long-term progress – not just pass a single test."
      }
    ]
  },

  /* ---------- Phương pháp giảng dạy ---------- */
  methods: {
    eyebrow: { vi: "Phương pháp giảng dạy", en: "Teaching approach" },
    title:   { vi: "Sáu nguyên tắc trong mỗi lớp học", en: "Six principles in every class" },
    intro:   { vi: "Được đúc kết từ thực tế đứng lớp và trợ giảng tại các trung tâm Anh ngữ.",
               en: "Drawn from hands-on experience teaching and assisting at English centers." },
    items: [
      { title: { vi: "Vận động phản xạ (TPR)", en: "Total Physical Response (TPR)" },
        text:  { vi: "Học qua hành động, trò chơi vận động và bài hát – ghi nhớ tự nhiên, không học vẹt.",
                 en: "Learning through actions, movement games, and songs – so language sticks naturally." } },
      { title: { vi: "Môi trường chỉ dùng tiếng Anh", en: "English-only classroom" },
        text:  { vi: "Hình thành phản xạ ngôn ngữ tự nhiên và phát âm chính xác ngay trong lớp.",
                 en: "Building natural responses and accurate pronunciation right in class." } },
      { title: { vi: "Nhập vai & thuyết trình", en: "Role-play & presentations" },
        text:  { vi: "Hoạt động nhóm, nhập vai và thuyết trình ngắn để rèn sự tự tin khi giao tiếp.",
                 en: "Group work, role-play, and short presentations to build confidence in communication." } },
      { title: { vi: "Công cụ học tập số", en: "Digital learning tools" },
        text:  { vi: "Tích hợp học liệu số, video và audio để dạy từ vựng, ngữ pháp trực quan, hiệu quả.",
                 en: "Digital resources, video, and audio to teach vocabulary and grammar clearly and effectively." } },
      { title: { vi: "Theo dõi tiến độ cá nhân", en: "Individual progress tracking" },
        text:  { vi: "Đánh giá định kỳ, hỗ trợ thêm hoặc nâng cao tùy theo năng lực từng học viên.",
                 en: "Regular assessments with targeted support or enrichment for each learner." } },
      { title: { vi: "Kết nối cùng phụ huynh", en: "Partnering with parents" },
        text:  { vi: "Trao đổi tiến độ học tập, lắng nghe băn khoăn và cùng phối hợp giải pháp hỗ trợ.",
                 en: "Sharing learning progress, listening to concerns, and coordinating support together." } }
    ]
  },

  /* ---------- Kinh nghiệm (mới nhất đặt trên cùng) ---------- */
  experience: {
    eyebrow: { vi: "Kinh nghiệm", en: "Experience" },
    title:   { vi: "Hành trình đứng lớp", en: "Teaching journey" },
    items: [
      {
        role:   { vi: "Giáo viên Tiếng Anh", en: "English Teacher" },
        org:    "IEC English Center",
        period: { vi: "06/2026 – nay", en: "Jun 2026 – Present" },
        current: true,
        bullets: [
          { vi: "Dạy tiếng Anh cho trẻ em bằng phương pháp TPR (Total Physical Response), trò chơi vận động và bài hát.",
            en: "Teach English to children using Total Physical Response (TPR), action-based games, and songs." },
          { vi: "Duy trì môi trường chỉ sử dụng tiếng Anh, giúp học viên phản xạ tự nhiên và phát âm chính xác.",
            en: "Maintain an English-only environment to develop natural language responses and accurate pronunciation." },
          { vi: "Phối hợp cùng giáo viên chủ nhiệm quản lý lớp 15–20 học viên, giữ môi trường học tập an toàn, tích cực.",
            en: "Collaborate with homeroom teachers to manage classes of 15–20 students and maintain a safe, positive learning environment." },
          { vi: "Thiết kế giáo án sinh động, tích hợp công cụ số để dạy từ vựng và cấu trúc ngữ pháp hiệu quả.",
            en: "Design engaging lesson plans and integrate digital tools to teach vocabulary and grammatical structures effectively." },
          { vi: "Tổ chức hoạt động nhóm, nhập vai và thuyết trình ngắn nhằm tăng sự tự tin và kỹ năng giao tiếp.",
            en: "Facilitate group work, role-play, and short presentations to strengthen students' confidence and communication skills." },
          { vi: "Theo dõi tiến độ từng học viên, đánh giá định kỳ và hỗ trợ hoặc bồi dưỡng khi cần.",
            en: "Monitor individual progress, conduct regular assessments, and provide targeted support or enrichment as needed." }
        ]
      },
      {
        role:   { vi: "Trợ giảng", en: "Teaching Assistant" },
        org:    "ILA English Center",
        period: { vi: "08/2025 – 05/2026", en: "Aug 2025 – May 2026" },
        bullets: [
          { vi: "Hỗ trợ giáo viên chính và giáo viên nước ngoài tổ chức hoạt động lớp học, chuẩn bị học liệu.",
            en: "Supported lead and foreign teachers in facilitating classroom activities and preparing teaching materials." },
          { vi: "Duy trì nề nếp lớp học, khuyến khích học viên tham gia và hình thành hành vi tích cực.",
            en: "Maintained classroom routines, encouraged student engagement, and supported positive behavior." },
          { vi: "Hỗ trợ học tập cá nhân, rà soát và chấm bài tập về nhà.",
            en: "Provided individual academic support and assisted with homework review and grading." },
          { vi: "Làm cầu nối giữa trung tâm và phụ huynh: thông tin tiến độ học tập, lắng nghe băn khoăn và phối hợp giải pháp hỗ trợ phù hợp.",
            en: "Served as a liaison between the center and parents by communicating students' learning progress, listening to concerns, and coordinating appropriate support and solutions." }
        ]
      },
      {
        role:   { vi: "Trợ giảng", en: "Teaching Assistant" },
        org:    "Wake Up Your English",
        period: { vi: "07/2023 – 07/2024", en: "Jul 2023 – Jul 2024" },
        bullets: [
          { vi: "Hỗ trợ các bài học tiếng Anh tương tác, hoạt động lớp học và chuẩn bị tài nguyên học tập.",
            en: "Assisted with interactive English lessons, classroom activities, and learning-resource preparation." },
          { vi: "Kèm thêm học viên cần hướng dẫn riêng và theo dõi mức độ tham gia trong giờ học.",
            en: "Supported students who required additional guidance and monitored participation during lessons." },
          { vi: "Biên tập học liệu video, audio và tổ chức trò chơi giáo dục khuyến khích giao tiếp bằng tiếng Anh.",
            en: "Edited video and audio materials and facilitated educational games to encourage English communication." }
        ]
      }
    ]
  },

  /* ---------- Học vấn, chứng chỉ, năng lực ---------- */
  credentials: {
    eyebrow: { vi: "Học vấn & Chứng chỉ", en: "Education & Certificates" },
    title:   { vi: "Nền tảng chuyên môn", en: "Professional foundation" },
    education: {
      title: { vi: "Học vấn", en: "Education" },
      items: [
        { name:   { vi: "Thạc sĩ Lý luận và Phương pháp dạy học bộ môn Tiếng Anh", en: "Master's Degree in English Language Teaching Methodology" },
          org:    { vi: "Trường ĐH Ngoại ngữ – Đại học Đà Nẵng", en: "University of Foreign Language Studies – The University of Danang" },
          period: { vi: "2026 – 2028 (dự kiến)", en: "2026 – 2028 (expected)" },
          inProgress: true },
        { name:   { vi: "Cử nhân Ngôn ngữ Anh", en: "Bachelor's Degree in English Linguistics" },
          org:    { vi: "Trường Đại học Duy Tân", en: "Duy Tan University" },
          period: "2021 – 2025",
          note:   { vi: "Tốt nghiệp loại Giỏi · GPA 3.2/4.0", en: "Very Good classification · GPA 3.2/4.0" } }
      ]
    },
    certificates: {
      title: { vi: "Chứng chỉ", en: "Certificates" },
      items: [
        { name: { vi: "TESOL Certificate (120 giờ)", en: "TESOL Certificate (120 hours)" },
          org:  "Madison",
          note: { vi: "Chứng chỉ giảng dạy tiếng Anh cho người nói ngôn ngữ khác.", en: "Teaching English to Speakers of Other Languages." } },
        { name:   { vi: "Chứng chỉ Nghiệp vụ sư phạm giảng dạy Tiếng Anh (THCS & THPT)", en: "Pedagogical Certificate for English Teaching (lower & upper secondary schools)" },
          org:    { vi: "Trường ĐH Ngoại ngữ – Đại học Đà Nẵng", en: "University of Foreign Language Studies – The University of Danang" },
          period: "2026 – 2027",
          inProgress: true }
      ]
    },
    competencies: {
      title: { vi: "Năng lực cốt lõi", en: "Core competencies" },
      items: [
        { vi: "Giảng dạy thiếu nhi & TPR",            en: "Young Learner Instruction & TPR" },
        { vi: "Soạn giáo án & phát triển học liệu",   en: "Lesson Planning & Materials Development" },
        { vi: "Quản lý lớp học",                      en: "Classroom Management" },
        { vi: "Đánh giá & hỗ trợ phân hóa",           en: "Student Assessment & Differentiated Support" },
        { vi: "Hoạt động giao tiếp & công cụ số",     en: "Communicative Activities & Digital Teaching Tools" }
      ]
    }
  },

  /* ---------- Phản hồi học viên / phụ huynh ----------
     CHỈ thêm phản hồi THẬT, đã được người viết đồng ý. Danh sách rỗng => mục tự ẩn.
     Mẫu:
     { quote: { vi: "…", en: "…" }, name: "Chị Lan", role: { vi: "Phụ huynh bé Na, lớp Kids 2", en: "Parent of Na, Kids 2 class" } },
  */
  testimonials: {
    eyebrow: { vi: "Phản hồi", en: "Testimonials" },
    title:   { vi: "Học viên & phụ huynh nói gì", en: "What learners & parents say" },
    items: [
    ]
  },

  /* ---------- Liên hệ ---------- */
  contact: {
    title: { vi: "Bắt đầu hành trình tiếng Anh của bạn", en: "Start your English journey" },
    text:  { vi: "Hãy để lại lời nhắn về mục tiêu và trình độ hiện tại – tôi sẽ phản hồi để cùng bạn chọn lộ trình phù hợp.",
             en: "Tell me about your goals and current level – I'll get back to you so we can choose the right path together." },
    mailSubject: { vi: "Tư vấn khóa học Tiếng Anh", en: "English course enquiry" }
  },

  /* ---------- Chữ trên giao diện (menu, nút, trang phụ) ---------- */
  ui: {
    skip:        { vi: "Bỏ qua điều hướng", en: "Skip to content" },
    navAbout:    { vi: "Giới thiệu", en: "About" },
    navMethods:  { vi: "Phương pháp", en: "Approach" },
    navExp:      { vi: "Kinh nghiệm", en: "Experience" },
    navCreds:    { vi: "Học vấn & Chứng chỉ", en: "Education" },
    navCourses:  { vi: "Khóa học", en: "Courses" },
    navPortal:   { vi: "Góc học viên", en: "Student corner" },
    ctaContact:  { vi: "Liên hệ tư vấn", en: "Get in touch" },
    ctaExp:      { vi: "Xem kinh nghiệm", en: "View experience" },
    current:     { vi: "Hiện tại", en: "Current" },
    inProgress:  { vi: "Đang theo học", en: "In progress" },
    menuOpen:    { vi: "Mở menu", en: "Open menu" },
    themeToggle: { vi: "Chuyển chế độ sáng/tối", en: "Toggle light/dark mode" },
    langGroup:   { vi: "Chọn ngôn ngữ", en: "Choose language" },
    footerPlace: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam" },
    backHome:    { vi: "← Về trang chủ", en: "← Back to home" },
    coursesEyebrow: { vi: "Khóa học", en: "Courses" },
    coursesTitle:   { vi: "Lộ trình học đang được hoàn thiện", en: "Learning paths coming soon" },
    coursesText:    { vi: "Thông tin chi tiết các lộ trình sẽ sớm được cập nhật. Bạn có thể liên hệ trực tiếp để được tư vấn trước.",
                      en: "Detailed course information will be published soon. Feel free to get in touch for advice in the meantime." },
    portalEyebrow:  { vi: "Góc học viên", en: "Student corner" },
    portalTitle:    { vi: "Khu luyện tập sắp ra mắt", en: "Practice area coming soon" },
    portalText:     { vi: "Học viên sẽ đăng nhập để nhận bài tập hằng ngày được cá nhân hóa.",
                      en: "Students will sign in to receive personalised daily exercises." }
  }
};
