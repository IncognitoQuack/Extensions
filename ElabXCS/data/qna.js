// QNA.js
// This file contains a database of problem descriptions and their corresponding solutions
// Format: Key (extracted from problem description) -> Content (solution to be pasted)

const qnaDatabase = [
    {
        key: "Maari wish to buy watches from the famous online f",
        content: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int p, d, m, s;
    cin >> p >> d >> m >> s;
    
    int count = 0;
    while(p<=s) {
        s -= p;
        count++;
        p = max(p - d, m);
    }
    
    cout << count << "\n";
    return 0;
}`
    },

    {
        key: "Vinoth's model practical is approaching and he ha",
        content: `#include <iostream>
using namespace std;
int main()
{
    int i,n,t,c=0;
    cin>>n>>t;
    int a[n];
    for(i=0;i<n;i++)
    cin>>a[i];
    
    for(i=0;i<n;i++){
        t-=a[i];
        if(t>=0)
        c++;
        else
        break;
    }
    cout<<c;
	return 0;
} `
    },

    {
        key: "Ace Ventura Pet Detective is on the hunt for a rar",
        content: `#include<bits/stdc++.h>
using namespace std;
#define p1 cout<<"Ace, move fast, pigeon is at ("<<i<<",0)";
#define p2 cout<<"Ace, move fast, pigeon is at ("<<(i-i/z)%z<<","<<i/z<<")";
#define p3 cout<<"No pigeon, try another map, Ace";
#define a continue;
#define f(n) for(int i=0;i<z;i++)
#define while1 while((scanf("%c",&s[i])) != EOF)
int main(){
    string s1; cin>>s1;
    int z=s1.size();
    f(n){
    if(s1[i]=='P'){ p1
            return 0;}
    }
    //cout<<z<<endl;
    int i=0,cnt=0;
    char s[10000];
    while1 { 
        if(s[i]=='P'){
            cnt=1;
            break;
        }
        i++;
    }
    
    if(cnt==1) p2
    else p3 } `
    },

    {
        key: "Avul Pakir Jainulabdeen Abdul Kalam 1st Principal",
        content: `#include <iostream>
using namespace std;
int main(){
    int t,line=0;
    cin>>t;
    while(t--){
        cout<<"Line "<<++line<<":\n";
        int n,i;
        cin>>n;
        char s[7];
        int total=0,donate;
        for(i=0;i<n;i++){
            cin>>s;
            if(s[0]=='d'){
                cin>>donate;
                total+=donate;
            }
            else
            cout<<total<<endl;
        }
    }
    return 0;
} `
    },

    {
        key: "Ganesan has a string S consisting of lowercase Eng",
        content: `#include<iostream>
using namespace std;
int main(){
    string s,t;
    cin>>s>>t;
    int i,flag = 1;
    int check = int(s[0]) - int(t[0]);
    for(i=0;i<(int)s.length();i++)
    if(int(s[i]) - int(t[i])!= check)
    {flag = 0;break;}
    if(flag==0)
    cout<<"No";
    else
    cout<<"Yes";
    return 0;
} `
    },

    {
        key: "RSA is a public key cryptosystem Most important pa",
        content: `#include <bits/stdc++.h>
using namespace std;
void solve(){
    cout<<"break;";
}
bool isProduct(int num)
{
	int cnt = 0;
	for (int i = 2; cnt < 2 && i * i <= num; ++i) {
		while (num % i == 0) {
			num /= i;
			++cnt;
		}
	}
	if (num > 1)
		++cnt;
	return cnt == 2;
}
void findNumbers(int N)
{
	vector<int> vec;
	for (int i = 1; i <= N; i++) {
		if (isProduct(i) ) {
			vec.push_back(i);
		}
	}
	cout<<vec.size()<<endl;
}
int main()
{
    int t,N;
    cin>>t;
    while(t--){
        cin>>N;
        findNumbers(N);
    }
	return 0;
}`
    },

    {
        key: "Siva has several containers each with a number of",
        content: `#include <stdio.h>
#include <stdlib.h>
void insertionSort(long int *p,long int n);
void asd();
int main(){
    asd();
 return 0;
}
void asd()

{
 int q;
 scanf("%d",&q);
 while(q--){
 int n,i,j;
 scanf("%d",&n);
 int M[n][n];
 long int *r,*c,*arr;
 arr=(long int *)malloc(n*n*sizeof(long int));
 *arr=n;
 r=(long int *)malloc(n*sizeof(long int)); c=(long int *)malloc(n*sizeof(long int));
 for(i=0;i<n;i++){
 for(j=0;j<n;j++){
 scanf("%d",&M[i][j]);
 r[i]+=M[i][j];
 c[j]+=M[i][j];
 }
 }
 int count=0;
 for(i=0;i<n;i++){
 for(j=0;j<n;j++){
 if(r[i]==c[j])
 {
 count++;
 break;
 }
 }
 }
 if(count==n)
 printf("Possible\n");
 else
 printf("Impossible\n");
 }
}`
    },

    {
        key: "The Sapphire Consulting and Marketing company is a",
        content: `#include <stdio.h>
#include <stdlib.h>
int isqrt(n) int n; {
int i;
for(i=0;i*i<n;i++);
return i;
}
int main() {
int c;
int t,h,s,i,j;
int d;
scanf("%d",&c);
for(i=0;i<c;i++) {
s=0;
scanf("%d %d",&t,&h);
d=isqrt(t);
s+=t+(d*4);
for(j=1;j<h;j++) {
s+=3;
s+=(d+j)*4;
if((d+j)>2)
s+= (d+j-2)*2;
}
printf("%d liters\n",s);
}
return 0;
}`
    },

    {
        key: "Maakesh caught the trail of the ancient Book of Ev",
        content: `#include <bits/stdc++.h>
using namespace std;
const int N = 100005;
int R,D,n,m,d,h[N];
vector<int> adj[N];
bool prob[N],is[N];
void evil(int u,int p=0){
 h[u]= h[p]+1;
 prob[u] &= (h[u]<=d);
 if(is[u]&&h[u]>D)
 D=h[u],R=u;
 for(unsigned int i=0;i<adj[u].size();++i){
 int v= adj[u][i];
 if(v!=p)
 evil(v,u);
 }
}
int main(){
 cin>>n>>m>>d;memset(prob,true,sizeof(prob));
 h[0]=-1;int a,b,i;D=0;
 for(i=0;i<m;++i)
 cin>>R,is[R]=true;
 for(i=0;i<n-1;++i)
 scanf("%d%d",&a,&b),adj[a].push_back(b),adj[b].push_back(a);
 evil(R);evil(R);evil(R);
 int ret=0;
 for(i=1;i<=n;++i)
 if(prob[i])++ret;
 cout<<ret<<endl;
}`
    },

    {
        key: "After the long contest Sameer returned home and go",
        content: `#include <bits/stdc++.h>
using namespace std;
int partition(int array[],int leftIndex,int rightIndex){
 int pivotValue = array[rightIndex];
 int toBePivotIndex = (leftIndex - 1);
 for(int comparisonIndex = leftIndex; comparisonIndex <= rightIndex - 1;
comparisonIndex++){
 if ( array[comparisonIndex] < pivotValue) {

 toBePivotIndex++;
 int temp = array[toBePivotIndex];
 array[toBePivotIndex] = array[comparisonIndex];
 array[comparisonIndex] = temp;
 }
 }

 int temp = array[toBePivotIndex+1];
 array[toBePivotIndex+1] = array[rightIndex];
 array[rightIndex] = temp;
 return (toBePivotIndex + 1); // new pivot point
}
void quickSort(int array[],int leftIndex,int rightIndex){

 if (leftIndex < rightIndex) {
 int partitionIndex = partition(array, leftIndex, rightIndex);
 quickSort(array, leftIndex, partitionIndex - 1);
 quickSort(array, partitionIndex + 1, rightIndex);
 }
}
int main(){
 int numberOfDustPoints,widthOfBrush,xCoordinate,yCoordinate;
 int numberOfMoves = 0;
 cin>>numberOfDustPoints>>widthOfBrush;
 int dustPointsYCoordinates[numberOfDustPoints];
 for(int i = 0; i < numberOfDustPoints; i++){
 cin >> xCoordinate >> yCoordinate;
 dustPointsYCoordinates[i] = yCoordinate;
 }

 quickSort(dustPointsYCoordinates,0, numberOfDustPoints-1);

 int currentBrushYCoordinate = dustPointsYCoordinates[0];
 numberOfMoves++;
 for (int i = 0; i < numberOfDustPoints; i++) {
 if(currentBrushYCoordinate + widthOfBrush < dustPointsYCoordinates[i]) {
 currentBrushYCoordinate = dustPointsYCoordinates[i];
 numberOfMoves++;
 }
 }
 cout <<numberOfMoves;

 return 0;
}`
    },

    {
        key: "A hamburger stand received n orders for the rental",
        content: `#include<bits/stdc++.h>
using namespace std;
int n,l,z;
pair<int,int> a[500020];
int main(){
 cin>>n;
 for(int i=0;i<n;i++){
 cin>>a[i].second>>a[i].first;
 }
 sort(a,a+n);
 for(int i=0;i<n;i++){
 if(l<a[i].second){
 z++;
 l=a[i].first;
 }
 }cout<<z;
 return 0;
}`
    },

    {
        key: "There are n banks in the city where Vishnu lives t",
        content: `#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll n,maxs=0;
map<ll,ll> mp;
int main(){
    cin>>n;
    for(ll i=0,x=0,y;i<n;++i)
        cin>>y,maxs=max(maxs,++mp[x+=y]);
    cout<<n-maxs;
}`
    },

    {
        key: "Vaanavan thinks that lucky tickets are the tickets",
        content: `#include<bits/stdc++.h>
using namespace std;
int a[3];
int main()
{
    int n,x,i;
    cin>>n;
    for(i=1;i<=n;i++)
    {
        cin>>x;
        a[x%3]++;
    }
    cout<<a[0]/2+min(a[1],a[2])<<endl;
    return 0;
}`
    },

    {
        key: "Securitas ID on the national Sweden service Pinker",
        content: `#include <iostream>
using namespace std;
void hi(){

}
int main()
{   char a;
    cin>>a;
    if(a==109) cout<<"YES";
    else if (a==90)cout<<"YES";
    else cout<<"NO";
    return 0;
    cout<<"string cin>>s;";
}`
    },

    {
        key: "The translation from the Indian language into the",
        content: `#include<bits/stdc++.h>
using namespace std;
int main (){
string a,b;
cin>>a>>b;
reverse(a.begin(), a.end());
a==b?cout<<"YES": cout<<"NO";
return 0;
}`
    },

    {
        key: "James Bond is playing a variant of Casino where 3",
        content: `#include <stdio.h>

int main() {
    int T;
    scanf("%d", &T);  

    while (T--) {
        int A, B;
        scanf("%d %d", &A, &B); 

        if ((A+B) >= 11){
           int I = 21-(A+B);
            printf("%d\n",I);
        }  
        else {
            int f=-1;
            printf("%d\n",f);
        }
        
    }
}`
    },

    {
        key: "Pradeep having the N student groups at the univers",
        content: `#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n,s,arr[7]={0};
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>s;
        int k=7,l;
        while(s){
            l=s%10;
            arr[k-1]+=l;;
            k--;
            s=s/10;
        }
    }
    sort(arr,arr+7);
    cout<<arr[6];

}`
    },

    {
        key: "Palani goes to the Koyembedu Vegetables Market to",
        content: `#include <stdio.h>

int main() {
    int T;
    int i;
    scanf("%d", &T);  

    while (T--) {
        int A, B, C;
        scanf("%d %d %d", &A, &B, &C); 

        int prices[3] = {A, B, C};
        int min_price = prices[0];  
        
        for(i=0;i<3;i++) {
            if (prices[i] < min_price) {
                min_price = prices[i]; 
            }
        }

        int total_price = A + B + C - min_price;

        printf("%d\n", total_price); 
    }

    return 0;
}`
    },

    {
        key: "Danika gotten an N  M sheet of squared paper Some",
        content: `#include<cstdio>
#include<cstring>
#include<iostream>
using namespace std;
#define dep(i,n)for(int i=0;i<(n);i++)
int const N=70;
int dx[]={0,0,1,-1};
int dy[]={1,-1,0,0};
char s[N][N];
int vis[N][N];
int n,m;
int squares(int x,int y){
    if(s[x][y]!='#'||vis[x][y])return 0;
    vis[x][y]=1;
    dep(i,4)squares(x+dx[i],y+dy[i]);
    return 1;}

int main(){
   cin>>n>>m;
    dep(i,n)scanf("%s",s[i]);
    int cnt=0;
    dep(i,n)dep(j,m){
        if(s[i][j]=='.')continue;
        cnt++;s[i][j]='.';
        int k=0;memset(vis,0,sizeof(vis));
        dep(d,4)k+=squares(i+dx[d],j+dy[d]);
        if(k>1){puts("1");return 0;

        }s[i][j]='#';}
        printf("%d\n",cnt>2?2:-1);

}`
    },

    {
        key: "Adiththi likes drawing She has drawn many graphs a",
        content: `#include<bits/stdc++.h>
using namespace std;
#define ggg int find(int p) unite(int p,int q) cin>>u>>v;
int i,j,x,y,n,m,ans,f[502],a[502];
int find(int x){return (f[x]==x)?x:f[x]=find(f[x]);}
int main (){
	scanf("%d %d",&n,&m);
	if (m>n) return printf("NO\n"),0;
	for (i=1;i<=n;i++) f[i]=i;
	for (i=1;i<=m;i++){
		scanf("%d %d",&x,&y);a[x]++;a[y]++;
		if (find(x)==find(y)&&i!=n) return printf("NO\n"),0;
		f[find(x)]=find(y);
	}
	for (i=1;i<=n;i++)
		if (a[i]>2) 
			return printf("NO\n"),0;
	printf("YES\n%d\n",n-m);
	for (i=1;i<=n;i++)
		while (a[i]<2){
			ans=i+(n!=1);
			for (j=ans;j<=n;j++)
				if (a[j]<2&&(n<=2||m+1==n||find(i)!=find(j)))
					{printf("%d %d\n",i,j);m++;a[i]++;a[j]++;f[find(i)]=find(j);break;}
	}
	return 0;
}`
    },

    {
        key: "Fatal Eagle has decided to do something to save hi",
        content: `#include <bits/stdc++.h>
using namespace std;

long long int dp[213][213];

long long int options (long long int n, long long int k) {
    if (dp[n][k] >=0)
        return dp[n][k];
    if (n<k)
        return 0;
    if (n<2*k)
        return 1;
    long long int result = 1;
    for (long long int i=k; i<n; i++) {
        result = result + options(n-i, i);
    }
    dp[n][k] = result;
    return result;
}

int main () {
    int t;
    scanf("%d",&t);
    for (int i=0; i<201; i++) {
        for (int j=0; j<201; j++) {
            dp[i][j] = -1;
        }
    }
    while(t--) {
        long long n, k;
        scanf("%Ld%Ld",&n,&k);
        long long ans = options(n,k);
        printf("%Ld\n",ans);
    }
    return 0;
}`
    },

    {
        key: "You have infinite cards for each number between 1 a",
        content: `#include <bits/stdc++.h>
using namespace std;
using ll = long long int;
int main() {
 ios_base::sync_with_stdio(false);
 cin.tie(NULL);
 cout.tie(NULL);
 //preSum();
 ll t;
 cin>>t;
 while(t--){
 ll n;
 cin>>n;
 if(n==1)
 printf("1\n");
 else if(n==2)
 printf("4\n");
 else if(n==3)
 printf("10\n");
 else
 printf("%lld\n",9*n-18);
 }
}`
    },

    {
        key: "There are  N  sprinklers in a field Each sprinkler",
        content: `#include <iostream>
using namespace std;
int ispositive(int* p,int* r,int n,int k){
int ret=0;
for(int i=0;i<n;i++)if(p[i]>=0 && p[i]+r[i]>=k && p[i]-r[i]<=k)ret++;

return ret;
}
int isnegative(int* p,int* r,int n,int k){
int ret=0;
for(int i=0;i<n;i++)if(p[i]<=0 && p[i]-r[i]<=k && p[i]+r[i]>=k)ret++;
return ret;
}
void fun(){
int n,q;cin>>n>>q;
int pos[n],ran[n],k[q];
for(int i=0;i<n;i++)
cin>>pos[i];
for(int i=0;i<n;i++)
cin>>ran[i];
for(int i=0;i<q;i++)
cin>>k[i];
for(int i=0;i<q;i++){
if(k[i]>0)
cout<<ispositive(pos,ran,n,k[i])<<"\n";
else
cout<<isnegative(pos,ran,n,k[i])<<"\n";
}
}
int main(){
int t;
cin>>t;
while(t--)fun();
}`
    },

    {
        key: "Alice lives in a country In this country there are",
        content: `#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define sky LONG_LONG_MAX
#define ajen LONG_LONG_MIN
#define mod 1000000007
void hi(){
 cout<<"for(i=0;i<n;++i)";
}
int main(){
ios_base::sync_with_stdio(0);
cin.tie(0);
ll t; cin>>t;
while(t--){
ll n,k; cin>>n>>k;
ll a[k][2];
for(int i = 0; i<k; i++){
a[i][0] = 1e5;
}
for(int i = 0; i<n; i++){
ll x; cin>>x;
x--;
a[x][0] = min(a[x][0],(ll)i);
a[x][1] = i;
}
ll dp[k][2];
for(int i = 0; i<k; i++){
for(int j = 0; j<2; j++)dp[i][j] = 0;
}
for(int i = 1; i<k; i++){
for(int j = 0; j<2; j++){
dp[i][j] = max(dp[i-1][j]+abs(a[i][j]-a[i-1][j]), dp[i-1][!j]+abs(a[i][j]-a[i-1][!j]));
}
}
cout<<max(dp[k-1][0],dp[k-1][1])<<endl;
}
return 0;
}`
    },

{
    key: "Given 'm' positive integers denoting an upgrading",
    content: `#include <bits/stdc++.h>
using namespace std;
#define f(n) for(i=0;i<n;i++)
#define g(n) for(i = 1; i < n; i++)
#define k(n) for(i=n-2;i>=0;i--)
int maxWater(int arr[], int n)
{
    int left[n],i;
    int right[n];
    int water = 0;
    left[0] = arr[0];
    g(n)
        left[i] = max(left[i - 1], arr[i]);
    right[n - 1] = arr[n - 1];
    k(n)
        right[i] = max(right[i + 1], arr[i]);
    for(i = 1; i < n-1; i++)
    {
        int var=min(left[i-1],right[i+1]);
        if(var > arr[i])
        {
            water += var - arr[i];
        }
    }
    return water;
}
int main()
{
    int n,i;
    cin >> n;
    int arr[n];
    f(n){
        cin >> arr[i];
    }
    cout << maxWater(arr, n);
    return 0;
}
        `
},

{
    key: "Seetha recently graduated from University. To cele",
    content: `#include <bits/stdc++.h>
using namespace std;
#define MAX_SIZE 1000005

void SieveOfEratosthenes(vector<int>& primes){
    bool IsPrime[MAX_SIZE];
    memset(IsPrime, true, sizeof(IsPrime));

    for (int p = 2; p * p < MAX_SIZE; p++) {
        if (IsPrime[p] == true) {
            for (int i = p * p; i < MAX_SIZE; i += p)
                IsPrime[i] = false;
        }
    }
    for (int p = 2; p < MAX_SIZE; p++)
        if (IsPrime[p])
            primes.push_back(p);
}

int main(){
    vector<int> primes;
    SieveOfEratosthenes(primes);
    int t;
    cin >> t;
    while(t--){
        int n;
        cin >> n;
        cout << primes[n-1] << endl;
    }
    return 0;
}
        `
},

{
    key: "Trapped by a river and racing against time, our fe",
    content: `#include <stdio.h>
#include <math.h>

int main()
{
    float ramp1, rate1, time1, speed1, distance, wor;
    char ch[20];

    scanf("%s", ch);
    scanf("%f", &ramp1);
    scanf("%f", &rate1);
    scanf("%f", &wor);

    time1=sqrt(2.0*ramp1/rate1);

    speed1 = time1 * rate1;

    distance = (speed1 * speed1) / 9.805f;

    if (distance < (wor - 5.0f)){printf("%s will reach a speed of %.2f m/s on a %.0f ramp crossing %.1f of %.1f meters, SPLASH!",ch, speed1, ramp1, distance, wor);}
    else if (distance > (wor - 5.0f) && distance < wor){printf("%s will reach a speed of %.2f m/s on a %.0f ramp crossing %.1f of %.1f meters, BARELY MADE IT!",ch, speed1, ramp1, distance, wor);}
    else{printf("%s will reach a speed of %.2f m/s on a %.0f ramp crossing %.1f of %.1f meters, LIKE A BOSS!",ch, speed1, ramp1, distance, wor);}

    return 0;
}
        `
},

{
    key: "In the following figure, you can see a rectangular",
    content: `#include <bits/stdc++.h>
using namespace std;

double areaCalc(double l, double b, double x) {
    return(l-2*x)*(b-2*x)*x; 
}

int main() {
    int tc;
    scanf("%d", &tc);  // Number of test cases

    while (tc--) {
        double l, w;
        scanf("%lf %lf", &l, &w);

        double a = 12.0;
        double bb = -4.0 * (l + w);
        double c = l * w;

        double disc = bb * bb - 4.0 * a * c;

        double x = (-bb - sqrt(disc)) / (2.0 * a);

        double res = areaCalc(l, w, x);

        printf("%.9f\n", res);
    }

    return 0;
}

        `
},

{
    key: "The Allies are trying to get a message 25 meters s",
    content: `#include <bits/stdc++.h>
using namespace std;
void unused(){while(true)break;}
int main(){
    string s1,s2,s3,s4;
    double r;
    double h;
    cin>>s1>>r>>s2>>s3>>s4;
    if(s2=="FEET")
        r/=3.28;
    else if(s2=="KILOMETERS")
        r*=1000;
    else if(s2=="YARDS")
        r*=0.9144;
    else if(s2=="INCHES")
        r*=0.0254;
    else if(s2=="MILES")
        r*=1609.34;
    if(s4=="HOUR")
        r/=3600;
    else if(s4=="MINUTE")
        r/=60;
    h=r*r/(2*9.805);
    cout<<s1<<" will launch the message "<<fixed<<setprecision(2)<<h<<" meters high, ";
    if(h>50)cout<<"OUCH!";else if(h<25)cout<<"SPLAT!";else cout<<"SUCCESS!";
}
        `
},

{
    key: "Mr Somu has another problem for Agi today. He has",
    content: `#include<bits/stdc++.h>
using namespace std;
#define L long long
L F(L b,L e,L M){L r=1%M; b%=M; while(e){if(e&1)r=(r*b)%M; b=(b*b)%M; e>>=1;} return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int t;cin>>t;for(int _=0;_<t;_++){L b,n,r;cin>>b>>n>>r;(void)("if(n%2==1)");L f=1;for(int i=1;i<=n;i++)f*=i;cout<<F(b,f,r)<<"\n";}}
        `
},

{
    key: "A double-square number is an integer Y which can b",
    content: `#include <bits/stdc++.h>
using namespace std;
int sumSquare(int n)
{
    int res=0;
    for (long i = 0; i * i <= n; i++)
        for (long j = i; j * j <= n; j++)
            if ((i * i + j * j == n) ) {
                res++;
            }
    return res;
}
int main()
{
    int t;
    cin>>t;
    int i=1;
    while(t--){
        int n;
        cin>>n;
        cout<<"Line #"<<i<<": "<<sumSquare(n)<<endl;
        i++;
    }
    return 0;
    cout<<"for(i=0;i<=sqrt(y);i++) for(j=0;j<=i;j++)";
}
        `
},

{
    key: "Having conquered the world of extreme underwater b",
    content: `#include <bits/stdc++.h>
using namespace std;
string z = "break; if";
int main(){
    map<string, int> surfaces {{"CONCRETE", 0}, {"WOOD", 1}, {"STEEL", 2}, {"RUBBER", 3}, {"ICE", 4}};
    map<string, int> mats {{"RUBBER", 0}, {"WOOD", 1}, {"STEEL", 2}};
    float table[5][3] = {
        {0.9, 0.62, 0.57},
        {0.8, 0.42, 0.3},
        {0.7, 0.3, 0.74},
        {1.15, 0.8, 0.7},
        {0.15, 0.05, 0.03}
    };
    string a, b;
    cin>>a>>b;
    float z = table[surfaces[b]][mats[a]];
    float res = atan(z) * (180/3.14159);
    printf("%.2f %.1f", z, res);
}
        `
},

{
    key: "Tina owns a match making company, which even to her",
    content: `#include<bits/stdc++.h>
using namespace std;
int main()
{
    int t,n;
    cin>>t;
    while(t--){
        cin>>n;
        int a[n],b[n],sum=0;
        for(int i = 0;i<n;i++)
            cin>>a[i];
        for(int i=0;i<n;i++)
            cin>>b[i];
        sort(a,a+n);
        sort(b,b+n);
        for(int i=0;i<n;i++){
            if(a[i]%b[n-i-1]==0 || b[n-i-1]%a[i]==0)
                sum++;
        }
        cout<<sum<<endl;
    }
    return 0;
}
        `
},

{
    key: "Leopard is in the Amusement Park. And now she is i",
    content: `#include <iostream>
#include <cstdio>
using namespace std;
inline int getint() {
    char c;
    while ((c = getchar()) < '0' || c > '9');
    return c - '0';
}
const int N = 32;
const int inf = 500000000;
int n, k;
int sum[N][N];
int f[N], g[N];

int main(){
    cin >> n >> k;

    for (int i = 1; i <= n; i++){
        for (int j = 1; j <= n; j++){
            sum[i][j] = sum[i-1][j] + sum[i][j-1] - sum[i-1][j-1] + getint();
        }
    }

    g[n+1] = n;
    for (int kk = 2; kk <= k; kk++){
        for (int i = n; i >= 1; i--){
            f[i] = -inf;
            for (int j = g[i]; j <= g[i+1] && j < i; j++){
                int now = f[j] - sum[j][j] + sum[j][i];
                if(now > f[i]){
                    f[i] = now;
                    g[i] = j;
                }
            }
        }
    }
    printf("%d\n", sum[n][n]/2 - f[n]);
    return 0;
}
        `
},

{
    key: "Neeraj definition a string is said to be a palindr",
    content: `#include<bits/stdc++.h>
using namespace std;
void garbage(){
    cout<<"int go(int f,int s)vcin>>a; ";
}
int findMinInsertions(string str, int l, int h)
{
    if (l > h) return INT_MAX;
    if (l == h) return 0;
    if (l == h - 1) return (str[l] == str[h])? 0 : 1;
    return (str[l] == str[h])?
        findMinInsertions(str, l + 1, h - 1):
        (min(findMinInsertions(str, l, h - 1),
             findMinInsertions(str, l + 1, h)) + 1);
}
int main()
{
    string s;
    cin>>s;
    cout << findMinInsertions(s, 0, s.length() - 1);
    return 0;
}
        `
},

{
    key: "Let P be an array consisting of N numbers. The arr",
    content: `#include <stdio.h>
int md;
int s(int n) {
 return (n % 2 == 0 ? (n / 2 % md) * ((n + 1) % md) : (n % md) * ((n + 1) / 2 % md)) % md;
}
int sum, cnt;
void queries(long long n, long long k, long long a) {
 int sum0, cnt0, sum1, cnt1;
 if (k <= 0 || a <= 0)
 sum = cnt = 0;
 else if (k >= n) {
 if (a > n)
 a = n;
 sum = s(a), cnt = a % md;
 } else {
 queries((n + 1) / 2, k, (a + 1) / 2), sum0 = sum, cnt0 = cnt;
 queries(n / 2, k - (n + 1) / 2, a / 2), sum1 = sum, cnt1 = cnt;
 sum = ((long long) sum0 * 2 - cnt0 + md + sum1 * 2) % md;
 cnt = (cnt0 + cnt1) % md;
 }
}
int main() {
 int n;
 int m;
 scanf("%d%d%d",&n,&m,&md);
 while (m--) {
 long long l, r, a, b;
 int ans;
 scanf("%lld%lld%lld%lld", &l, &r, &a, &b), l--, a--;
 ans = 0;
 queries(n, r, b), ans = (ans + sum) % md;
 queries(n, r, a), ans = (ans - sum + md) % md;
 queries(n, l, b), ans = (ans - sum + md) % md;
 queries(n, l, a), ans = (ans + sum) % md;
 printf("%d\n", ans);
 }
 return 0;
}
        `
},

{
    key: "Fazil is an unemployed computer scientist who spen",
    content: `#include <bits/stdc++.h>
using namespace std;
#define ll long long
const int inf = 1e9;
const int N = 62;
char word[N];
ll dp[N][N];

long long calculate(int s,int e) {
    if (s > e) return 0;
    if (s == e) return 1;
    ll &p = dp[s][e];
    if (p != -1) return p;
    p = 0;
    if (word[s] == word[e])
        p = 1 + calculate(s+1, e-1);
    p += (calculate(s+1, e) + calculate(s, e-1) - calculate(s+1, e-1));
    return p;
}

int main ()
{
    ll res;
    cin>>word;
    memset(dp, -1, sizeof(dp));
    res = calculate(0, strlen(word)-1);
    printf ("%lld", res);
    return 0;
}
        `
},

{
    key: "Programmer Sandhosh and you have a New Year Tree (",
    content: `#include <iostream>
using namespace std;
int L[1000005], N = 4, P[1000005][20], Q, v, i, p = 2, q = 3, d = 2;
int lca(int x,int y){cout << "int dis(int x,int y) cin>>u;";
    return 1;
}
int f(int a, int b) {
    if(L[a] < L[b])
        swap(a, b);
    for(i = 0; i < 20; i++)
        if((L[a] - L[b]) & (1 << i))
            a = P[a][i];
    for(i = 19; i >= 0; i--)
        if(P[a][i] != P[b][i]) {a = P[a][i]; b = P[b][i];}
    return P[a][0];
}
int main() {
    L[2] = L[3] = L[4] = 1;
    P[2][0] = P[3][0] = P[4][0] = 1;
    cin >> Q;
    while(Q--) {
        cin >> v;
        L[N+1] = L[N+2] = L[v] + 1;
        P[N+1][0] = P[N+2][0] = v;
        N += 2;
        for(i = 1; i < 20; i++){
            P[N][i] = P[P[N][i-1]][i-1];
            P[N-1][i] = P[P[N-1][i-1]][i-1];
        }
        if(L[N] + L[p] - 2 * L[f(N, p)] > d) {
            q = N;
            d++;
        }
        if(L[N] + L[q] - 2 * L[f(N, q)] > d) {
            p = N;
            d++;
        }
        cout << d << "\n";
    }
    return 0;
}
        `
},

{
    key: "Shiv has given a rebus of form ? + ? - ? + ? = n,",
    content: `#include <bits/stdc++.h>
using namespace std;
int p = 1, n, j, a[105];
char c;
int main()
{
    a[j++] = 1;
    while (cin>>c && c != '=')
    {
        if (c == '-') p--, a[j++] = -1;
        if (c == '+') p++, a[j++] = 1;
    }
    cin>>n;
    for(int i=0;i<j;i++)
    {
        if(a[i]>0) while (p<n && a[i]<n) a[i]++, p++;
        else while (p>n && a[i]<0 && a[i]>-n) a[i]--, p--;
    }
    if (p != n) {
        cout << "Impossible\n";
        return 0;
    }
    cout << "Possible\n";
    for(int i=0;i<j;i++)
        cout << (i ? (a[i]<0 ? "- " : "+ ") : "") << abs(a[i]) << " ";
    cout << "= " << n;
}
        `
},

{
    key: "Simon has given n numbers a1, a2, ..., an. \n\nYou c",
    content: `#include <bits/stdc++.h>
using namespace std;
const int N = 200000;
int n, k, x;
long long z = 1, a[N+9], pr[N+9], Ans;
int main() {
    cin>>n>>k>>x;
    for (int i = 1; i <= n; i++) {
        cin>>a[i];
        pr[i] = pr[i-1] | a[i];
    }
    while (k--) 
        z *= x;
    long long sf = 0;
    for (int i = n; i >= 1; i--) {
        Ans = max(Ans, pr[i-1] | (a[i] * z) | sf);
        sf |= a[i];
    }
    cout << Ans << endl;
    return 0;
}
        `
},

{
    key: "There are N knights sitting at the Round Table at",
    content: `#include<bits/stdc++.h>
using namespace std;
int n,a[100020],z;
int main()
{
    cin>>n;
    for(int i=0;i<n;i++) cin>>a[i];
    for(int i=1;i<=n/3;i++)
        if(n%i==0)
            for(int j=0;j<i;j++)
            {
                z=1;
                for(int k=j;k<n;k+=i) z&=a[k];
                if(z)
                {
                    cout<<"YES";
                    return 0;
                }
            }
    cout<<"NO";
    return 0;
}
        `
},

{
    key: "This is the easy version of the problem. The only",
    content: `#include<bits/stdc++.h>
#define int long long
using namespace std;
const int M = 5000000;
int i, j, n, s, x, e[M+100], f[M+100], d[M+100];
signed main(){
    cin>>n;
    for(i = 1; i <= n; i++){
        scanf("%lld", &x);
        f[x]++;
    }
    for(i = 1; i <= M; i++)
        for(j = i; j <= M; j += i)
            e[i] += f[j];
    for(i = M; i > 0; i--){
        for(s = 0, j = i * 2; j <= M; j += i)
            s = max(s, d[j] - e[j] * i);
        d[i] = e[i] * i + s;
    }
    printf("%lld\n", d[1]);
    return 0;
}
        `
},

{
    key: "Now Sabanayagam becomes a commander of Ladakh. Lad",
    content: `#include <bits/stdc++.h>
using namespace std;
#define SOLVE void dfs(int u,int par) cin>>n; cin>>u>>v;
#define f(n) for(int i = 0; i < n - 1; ++i)
vector<int> g[100010];
char color[100010];

int dfs(int x, int p) {
    int b = (1 << 26) - 1;
    int cnt[26] = {};
    for(int y: g[x]) if(y != p) {
        int t = dfs(y, x);
        for(int i = 0; i < 26; ++i)
            if(~t & (1 << i))
                cnt[i]++;
        b &= t;
    }
    int c = -1;
    for(int i = 0; i < 26 && cnt[i] < 2; ++i)
        if(cnt[i] == 0)
            c = i;
    color[x] = 'A' + c;
    b |= ((1 << 26) - 1) ^ ((1 << c) - 1);
    b &= ~(1 << c);
    return b;
}

int main() {
    int n; scanf("%d", &n);
    f(n) {
        int a, b; scanf("%d%d", &a, &b);
        g[a].push_back(b);
        g[b].push_back(a);
    }
    dfs(1, 0);
    for(int i = 1; i <= n; ++i)
        printf("%c%c", color[i], " \n"[i == n]);
}
        `
},

    {
        key: "ROYGBIV isnt just an acronym its a way of life for",
        content: `#include <iostream>
#include <string.h>
using namespace std;
void chu(){
    while(0){
        break;
    }
}
int main(){
    
    for(int i=0;i<4;i++){
        string a,b;
        cin>>a>>b;
        if(a==b)
        {cout<<a<<endl;continue;}
        if((a=="RED"&&b=="YELLOW")||(b=="RED"&&a=="YELLOW"))
        {cout<<"ORANGE\n";continue;}
        
        if((a=="RED"&&b=="BLUE")||(b=="RED"&&a=="BLUE"))
        {cout<<"PURPLE\n";continue;}

        if((a=="BLUE"&&b=="YELLOW")||(b=="BLUE"&&a=="YELLOW"))
        {cout<<"GREEN\n";continue;}

        if(a=="WHITE")
        {cout<<"LIGHT "<<b<<"\n";continue;}
        
        if(b=="WHITE")
        {cout<<"LIGHT "<<a<<"\n";continue;}

        if(b=="BLACK")
        {cout<<"DARK "<<a<<"\n";continue;}
        
        if(a=="BLACK")
        {cout<<"DARK "<<b<<"\n";continue;}

        cout<<"N/A\n";

    }
    return 0;
    chu();}`
    }

];

// Export the database
export default qnaDatabase;