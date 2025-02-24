# GitHub Profile Manager 🚀

A web application for searching and managing GitHub profiles with the following features:  
- User search functionality  
- Detailed profile visualization  
- Repository listing  
- Customizable display preferences  

![Screenshot - Home](assets/screenshots/home.png)  
![Screenshot - Profile Details](assets/screenshots/profile-detail.png)  
![Screenshot - Settings](assets/screenshots/settings.png)  

## 🛠 Installation & Setup

**Prerequisites**:  
- Node.js v16+  
- npm v8+  
- Angular CLI v15+  

```bash
# 1. Clone repository
git clone https://github.com/your-username/github-profile-manager.git

# 2. Install dependencies
npm install

# 3. Configure environment variables (create src/environments/environment.ts)
export const environment = {
  production: false,
  githubApiUrl: 'https://api.github.com',
  // Optional: Add personal token for higher rate limits
  githubToken: 'YOUR_TOKEN_HERE'
};

# 4. Start development server
ng serve
