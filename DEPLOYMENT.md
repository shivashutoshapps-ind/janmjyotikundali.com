# JanmJyoti Deployment Guide (VPS)

This guide documents the procedure for deploying the **JanmJyoti** Next.js application to a Linux Virtual Private Server (VPS) using Nginx and PM2.

## 1. Prerequisites

You must have root or sudo access to a Linux VPS (e.g., Ubuntu 22.04/24.04).

### Install Node.js (v20 LTS Recommended)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install Git
```bash
sudo apt-get install -y git
```

### Install Nginx
```bash
sudo apt-get install -y nginx
```

### Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

## 2. Setup the Repository

### Clone the Repository
```bash
cd /var/www/
sudo git clone https://github.com/your-org/janmjyotikundali.git
cd janmjyotikundali
```

*(Ensure the correct branch is checked out, usually `master` or `main`.)*

### Set Permissions
Assign the correct ownership to the directory (assuming your user is `ubuntu` or `www-data`):
```bash
sudo chown -R $USER:$USER /var/www/janmjyotikundali
```

## 3. Environment Configuration

Create a `.env.local` file from the example:
```bash
cp .env.example .env.local
```
Verify the production domain is set correctly inside `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://janmjyotikundali.com
```
*(Do not expose or commit this `.env.local` file to the repository.)*

## 4. Install and Build

### Install Dependencies
```bash
npm ci
```

### Run Tests
```bash
npx vitest run
```
*(Ensure all tests pass before proceeding.)*

### Production Build
```bash
npm run build
```

*(Note: The Next.js `output: "standalone"` option is deliberately **not** configured to ensure static fonts and `@react-pdf/renderer` assets remain traceable and resolve correctly within the standard Node server environment.)*

## 5. Start the Application

Start the app using PM2 to ensure it runs in the background and restarts on crashes:
```bash
pm2 start npm --name "janmjyoti" -- start
```

### Setup Startup Persistence
Ensure PM2 restarts the app when the server reboots:
```bash
pm2 startup
pm2 save
```

## 6. Configure Nginx (Reverse Proxy)

An example Nginx configuration is provided in `deploy/nginx/janmjyotikundali.conf.example`.

Copy it to the Nginx config directory:
```bash
sudo cp deploy/nginx/janmjyotikundali.conf.example /etc/nginx/sites-available/janmjyotikundali.conf
```
Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/janmjyotikundali.conf /etc/nginx/sites-enabled/
```
Verify Nginx configuration syntax:
```bash
sudo nginx -t
```
Restart Nginx:
```bash
sudo systemctl restart nginx
```

## 7. SSL & DNS Configuration

1. **DNS**: Ensure `janmjyotikundali.com` and `www.janmjyotikundali.com` A-records point to your VPS IP address.
2. **SSL**: Use Certbot (Let's Encrypt) to automatically generate and configure SSL certificates:
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d janmjyotikundali.com -d www.janmjyotikundali.com
```

*(After Certbot runs, it will automatically update your Nginx configuration. Review the file to ensure the HTTP to HTTPS redirect is active).*

## 8. Ongoing Maintenance

An example deployment script is available at `deploy/deploy.sh.example`.
For subsequent updates, simply pull the latest code, install dependencies, rebuild, and restart PM2:

```bash
git pull origin master
npm ci
npm run build
pm2 restart janmjyoti
```
