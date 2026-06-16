"""
palindrome.py
-------------
Five distinct Python implementations for palindrome detection and related utilities.
"""


# ── 1. Basic string palindrome (slice reverse) ────────────────────────────────

def is_palindrome(s: str) -> bool:
    """
    Return True if `s` is a palindrome.
    Comparison is case-insensitive and ignores spaces.

    >>> is_palindrome("racecar")
    True
    >>> is_palindrome("A man a plan a canal Panama")
    True
    >>> is_palindrome("hello")
    False
    """
    cleaned = s.replace(" ", "").lower()
    return cleaned == cleaned[::-1]


# ── 2. Integer palindrome ─────────────────────────────────────────────────────

def is_palindrome_number(n: int) -> bool:
    """
    Return True if the integer `n` reads the same forwards and backwards.
    Negative numbers always return False.

    >>> is_palindrome_number(121)
    True
    >>> is_palindrome_number(-121)
    False
    >>> is_palindrome_number(10)
    False
    """
    if n < 0:
        return False
    s = str(n)
    return s == s[::-1]


# ── 3. Two-pointer palindrome (O(1) space) ────────────────────────────────────

def is_palindrome_two_pointer(s: str) -> bool:
    """
    Return True if `s` is a palindrome using left/right pointer walk.
    O(n) time, O(1) extra space — no reversed copy of the string is created.
    Comparison is case-insensitive and ignores spaces.

    >>> is_palindrome_two_pointer("racecar")
    True
    >>> is_palindrome_two_pointer("hello")
    False
    """
    cleaned = s.replace(" ", "").lower()
    left, right = 0, len(cleaned) - 1
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    return True


# ── 4. All palindromic substrings (expand-around-center) ─────────────────────

def palindromic_substrings(s: str) -> list:
    """
    Return a sorted list of all unique palindromic substrings of `s`
    with length >= 2.

    Uses the expand-around-center technique: for every index, expand
    outward checking both odd-length (single center) and even-length
    (pair center) palindromes.

    >>> sorted(palindromic_substrings("aabaa"))
    ['aa', 'aabaa', 'aba']
    """
    found = set()
    n = len(s)

    def expand(left: int, right: int) -> None:
        while left >= 0 and right < n and s[left] == s[right]:
            if right - left + 1 >= 2:
                found.add(s[left:right + 1])
            left -= 1
            right += 1

    for i in range(n):
        expand(i, i)      # odd-length palindromes
        expand(i, i + 1)  # even-length palindromes

    return sorted(found)


# ── 5. Longest palindromic substring ─────────────────────────────────────────

def longest_palindrome(s: str) -> str:
    """
    Return the longest palindromic substring of `s`.
    If multiple substrings share the maximum length, the first one is returned.

    Uses the expand-around-center technique: O(n^2) time, O(1) space.

    >>> longest_palindrome("babad")
    'bab'
    >>> longest_palindrome("cbbd")
    'bb'
    >>> longest_palindrome("racecar")
    'racecar'
    """
    if not s:
        return ""

    start, end = 0, 0

    def expand(left: int, right: int) -> tuple:
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - 1  # last valid indices

    for i in range(len(s)):
        l1, r1 = expand(i, i)        # odd-length center
        l2, r2 = expand(i, i + 1)    # even-length center

        if r1 - l1 > end - start:
            start, end = l1, r1
        if r2 - l2 > end - start:
            start, end = l2, r2

    return s[start:end + 1]


# ── Demo / quick-test ─────────────────────────────────────────────────────────

if __name__ == "__main__":
    print("=== is_palindrome ===")
    print(is_palindrome("racecar"))                        # True
    print(is_palindrome("A man a plan a canal Panama"))    # True
    print(is_palindrome("hello"))                          # False

    print("\n=== is_palindrome_number ===")
    print(is_palindrome_number(121))                       # True
    print(is_palindrome_number(-121))                      # False
    print(is_palindrome_number(10))                        # False

    print("\n=== is_palindrome_two_pointer ===")
    print(is_palindrome_two_pointer("racecar"))            # True
    print(is_palindrome_two_pointer("hello"))              # False

    print("\n=== palindromic_substrings ===")
    print(palindromic_substrings("aabaa"))                 # ['aa', 'aabaa', 'aba']

    print("\n=== longest_palindrome ===")
    print(longest_palindrome("babad"))                     # 'bab'
    print(longest_palindrome("cbbd"))                      # 'bb'
    print(longest_palindrome("racecar"))                   # 'racecar'
